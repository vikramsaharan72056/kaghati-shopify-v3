import { Readable } from "stream";
class OpenAIResponseStream extends Readable {
  constructor(openAIIterable, options = {}) {
    super(options);
    this.responseContentType = "application/octet-stream";
    this.openAIIterable = openAIIterable;
    this.reading = false;
    this.result = "";
  }
  processChunk() {
    let isFunctionStreaming;
    return (json) => {
      if (json.choices[0]?.delta?.function_call?.name) {
        isFunctionStreaming = true;
        return `{"function_call": {"name": "${json.choices[0]?.delta?.function_call.name}", "arguments": "`;
      }
      if (json.choices[0]?.delta?.function_call?.arguments) {
        const argumentChunk = json.choices[0].delta.function_call.arguments;
        const escapedPartialJson = argumentChunk.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
        return `${escapedPartialJson}`;
      }
      if (isFunctionStreaming && (json.choices[0]?.finish_reason === "function_call" || json.choices[0]?.finish_reason === "stop")) {
        isFunctionStreaming = false;
        return '"}}';
      }
      return json.choices?.[0]?.delta?.content ?? json.choices?.[0]?.text;
    };
  }
  async _read() {
    if (this.reading)
      return;
    this.reading = true;
    const process = this.processChunk();
    try {
      for await (const part of this.openAIIterable) {
        const content = process(part);
        if (content) {
          this.result += content;
          this.push(content);
        }
      }
      this.push(null);
      this.reading = false;
    } catch (err) {
      this.emit("error", err);
    }
  }
}
function openAIResponseStream(openAIIterable, options = {}) {
  const stream = new OpenAIResponseStream(openAIIterable);
  stream.on("end", () => {
    if (options.onComplete)
      options.onComplete(stream.result);
  });
  return stream;
}
export {
  openAIResponseStream
};
//# sourceMappingURL=index.js.map
