const $storage = Symbol("object");
const _Session = class {
  constructor(_id, obj) {
    this._id = _id;
    this.changedKeys = /* @__PURE__ */ new Set();
    this.ended = false;
    this[$storage] = obj;
  }
  static fromInput(input) {
    if (input) {
      return new _Session(input.id, input);
    }
  }
  get(key) {
    return this[$storage][key];
  }
  set(key, value) {
    this.changedKeys.add(key);
    this[$storage][key] = value;
  }
  delete(key) {
    this.changedKeys.add(key);
    this[$storage][key] = null;
  }
  end() {
    this.changedKeys.add("id");
    this.ended = true;
  }
  clearChanges() {
    this.changedKeys.clear();
  }
  get changed() {
    return this.changedKeys.size > 0;
  }
  toJSON() {
    return this[$storage];
  }
  toChangedJSON() {
    const changes = {};
    for (const key of this.changedKeys) {
      changes[key] = this[$storage][key];
    }
    return changes;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
    this.set("id", this._id);
  }
};
let Session = _Session;
$storage;
export {
  Session
};
//# sourceMappingURL=Session.js.map
