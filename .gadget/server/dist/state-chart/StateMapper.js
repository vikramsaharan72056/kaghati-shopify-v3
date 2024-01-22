import mapValue, { assert, invert, isEmpty, isObject, isString } from "../utils";
function mapStateValue(state, mapper) {
  if (isObject(state)) {
    const result = {};
    for (const [key, value] of Object.entries(state)) {
      result[mapper(key)] = mapStateValue(value, mapper);
    }
    return result;
  }
  return mapper(state);
}
function mapStateHistoryValue(state, mapper) {
  const result = {
    current: mapper(state.current)
  };
  if (state.children) {
    result.children = {};
    for (const [name, history] of Object.entries(state.children)) {
      result.children[mapper(name)] = mapStateHistoryValue(history, mapper);
    }
  }
  return result;
}
function isStateValue(value) {
  if (isString(value)) {
    return true;
  }
  if (!isObject(value)) {
    return false;
  }
  return Object.entries(value).every(([key, value2]) => isString(key) && isStateValue(value2));
}
function isStateHistoryValue(value) {
  if (!isObject(value)) {
    return false;
  }
  const record = value;
  if (!("current" in record) || !isString(record.current)) {
    return false;
  }
  if ("children" in record && record.children) {
    if (!isObject(record.children)) {
      return false;
    }
    return Object.values(record.children).every((v) => isStateHistoryValue(v));
  }
  return true;
}
class StateMapper {
  constructor(model) {
    this.model = model;
    this.stateKeyToDataMap = {};
    this.populateStateMaps(model.stateChart.childStates, []);
  }
  mapStorageValueToApiIdentifiers(stateValue) {
    return mapStateValue(stateValue, (key) => {
      if (key in this.stateKeyToDataMap) {
        return this.stateKeyToDataMap[key].apiIdentifier;
      }
      return key;
    });
  }
  mapApiIdentifiersToStorageValue(stateValue) {
    return mapStateValue(stateValue, (apiIdentifier) => {
      if (apiIdentifier in this.apiIdentifierToStateKeyMap) {
        return this.apiIdentifierToStateKeyMap[apiIdentifier];
      }
      return apiIdentifier;
    });
  }
  mapStorageHistoryValueToApiIdentifiers(stateHistoryValue) {
    return mapStateHistoryValue(stateHistoryValue, (key) => {
      if (key in this.stateKeyToDataMap) {
        return this.stateKeyToDataMap[key].apiIdentifier;
      }
      return key;
    });
  }
  mapApiIdentifiersToStorageHistoryValue(stateHistoryValue) {
    return mapStateHistoryValue(stateHistoryValue, (apiIdentifier) => {
      if (apiIdentifier in this.apiIdentifierToStateKeyMap) {
        return this.apiIdentifierToStateKeyMap[apiIdentifier];
      }
      return apiIdentifier;
    });
  }
  stateKeyToData(stateKey) {
    return assert(this.stateKeyToDataMap[stateKey], `state key "${stateKey}" not found in state map`);
  }
  get apiIdentifierToStateKeyMap() {
    return invert(mapValue(this.stateKeyToDataMap, ({ apiIdentifier }) => apiIdentifier));
  }
  populateStateMaps(states, path) {
    for (const state of states) {
      path.push(state.apiIdentifier);
      this.stateKeyToDataMap[state.key] = {
        apiIdentifier: state.apiIdentifier,
        blob: state,
        value: stateValueFromPath(path),
        path: path.slice()
      };
      if (state.childStates) {
        this.populateStateMaps(state.childStates, path);
      }
      path.pop();
    }
  }
}
function stateValueFromPath(path) {
  if (path.length == 0) {
    throw new Error("can't compute state value from an empty path");
  }
  if (path.length == 1) {
    return path[0];
  }
  let index = path.length - 1;
  let stateValue = path[index];
  while (--index >= 0) {
    const stateApiIdentifier = path[index];
    stateValue = { [stateApiIdentifier]: stateValue };
  }
  return stateValue;
}
function flattenStateValue(state) {
  if (isString(state)) {
    return [state];
  }
  if (isEmpty(state)) {
    return [];
  }
  const [key, stateValue] = Object.entries(state)[0];
  return [key, ...flattenStateValue(stateValue)];
}
export {
  StateMapper,
  flattenStateValue,
  isStateHistoryValue,
  isStateValue,
  stateValueFromPath
};
//# sourceMappingURL=StateMapper.js.map
