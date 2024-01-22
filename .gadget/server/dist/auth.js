import crypto from "node:crypto";
const generateCode = (numBytes = 64) => {
  return crypto.randomBytes(numBytes).toString("hex");
};
const hashCode = (code) => {
  return crypto.createHash("sha256").update(code).digest("hex");
};
const getSessionFromRequest = (request) => {
  if ("applicationSession" in request) {
    return request.applicationSession;
  }
  throw new Error("The request is not a Gadget server request");
};
const preValidation = async (request, reply) => {
  let authenticated = false;
  const applicationSession = getSessionFromRequest(request);
  authenticated = !!applicationSession.get("user");
  if (!authenticated) {
    if (request.gadgetAuth?.redirectToSignIn) {
      await reply.redirect(request.gadgetAuth.signInPath);
    } else {
      await reply.status(403).send();
    }
  }
};
export {
  generateCode,
  hashCode,
  preValidation
};
//# sourceMappingURL=auth.js.map
