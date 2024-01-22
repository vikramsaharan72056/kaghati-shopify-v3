const argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
const symToStringTag = Symbol.toStringTag;
const nativeObjectToString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : nativeObjectToString.call(value);
}
function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  let unmasked = false;
  try {
    value[symToStringTag] = void 0;
    unmasked = true;
  } catch (e) {
  }
  const result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
function assert(value, message) {
  if (!value) {
    throw new Error(message ?? "value is not truthy");
  }
  return value;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  const tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
function isArrayLike(value) {
  return value != null && typeof value.length == "number" && !isFunction(value);
}
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
  const tag = baseGetTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
function isString(value) {
  const type = typeof value;
  return type === "string" || type === "object" && value != null && !Array.isArray(value) && baseGetTag(value) == "[object String]";
}
function keyBy(array, iteratee) {
  return array.reduce((result, value) => {
    if (typeof iteratee === "function") {
      result[iteratee(value)] = value;
    } else if (typeof iteratee === "string") {
      result[value[iteratee]] = value;
    }
    return result;
  }, {});
}
function pickBy(object, predicate) {
  const result = {};
  for (const key in object) {
    if (hasOwnProperty.call(object, key) && predicate(object[key], key)) {
      result[key] = object[key];
    }
  }
  return result;
}
const toString = Object.prototype.toString;
function invert(object) {
  const result = {};
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (value != null && typeof value.toString !== "function") {
      value = toString.call(value);
    }
    result[value] = key;
  });
  return result;
}
function mapValue(object, iteratee) {
  object = Object(object);
  const result = {};
  Object.keys(object).forEach((key) => {
    result[key] = iteratee(object[key], key, object);
  });
  return result;
}
var utils_default = mapValue;
const defaults = (...args) => args.reverse().reduce((acc, obj) => ({ ...acc, ...obj }), {});
export {
  assert,
  utils_default as default,
  defaults,
  invert,
  isArrayLike,
  isEmpty,
  isFunction,
  isObject,
  isObjectLike,
  isString,
  keyBy,
  pickBy
};
//# sourceMappingURL=utils.js.map
