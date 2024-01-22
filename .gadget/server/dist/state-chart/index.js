import { NoTransitionError } from "../errors";
import { Globals } from "../globals";
import { flattenStateValue } from "./StateMapper";
const possibleTransitionStates = ({ record, model }, mapper) => {
  const state = record.state;
  if (state) {
    const stateValue = mapper.mapApiIdentifiersToStorageValue(state);
    return Globals.platformModules.lodash().map(flattenStateValue(stateValue), (key) => mapper.stateKeyToData(key));
  } else if (model.stateChart.initialChildStateKey) {
    const startState = mapper.stateKeyToData(model.stateChart.initialChildStateKey);
    return [startState];
  }
  return [];
};
const checkCanExecute = (context, mapper) => {
  const receivingState = Globals.platformModules.lodash().find(possibleTransitionStates(context, mapper), ["blob.key", context.transition.fromStateKey]);
  if (!receivingState) {
    const {
      record: { state }
    } = context;
    let stateName = "<unknown>";
    if (Globals.platformModules.lodash().isString(state)) {
      stateName = state;
    } else if (Globals.platformModules.lodash().isObjectLike(state)) {
      stateName = JSON.stringify(state);
    } else if (context.model.stateChart.initialChildStateKey) {
      const initialStateKey = context.model.stateChart.initialChildStateKey;
      const state2 = Globals.platformModules.lodash().find(context.model.stateChart.childStates, { key: initialStateKey });
      if (state2) {
        stateName = state2.name;
      }
    }
    let errorMessage = `Invalid action for the ${context.model.apiIdentifier} model. Unable to execute the "${context.action.apiIdentifier}" action in state "${stateName}".`;
    if (context.action.apiIdentifier == "logInViaEmail") {
      errorMessage = `Invalid action for the ${context.model.apiIdentifier} model. This session is already logged in for ${context.params.email}.`;
    }
    throw new NoTransitionError(errorMessage);
  }
};
const computeStateHistory = (history, state) => {
  const newHistory = history ? Globals.platformModules.lodash().cloneDeep(history) : { current: "" };
  const path = [];
  while (Globals.platformModules.lodash().isObject(state)) {
    const [current, newState] = Object.entries(state)[0];
    path.push("current");
    Globals.platformModules.lodash().set(newHistory, path, current);
    path.pop();
    path.push("children");
    path.push(current);
    state = newState;
  }
  path.push("current");
  Globals.platformModules.lodash().set(newHistory, path, state);
  return newHistory;
};
const computeStateValueFor = (history, state, mapper) => {
  const path = Globals.platformModules.lodash().clone(state.path);
  const historyPath = path.flatMap((segment) => ["children", segment]);
  while (state.blob.initialChildStateKey) {
    if (state.blob.restoreHistory) {
      historyPath.push("current");
      const apiIdentifier = Globals.platformModules.lodash().get(history, historyPath);
      historyPath.pop();
      const maybeChildState = Globals.platformModules.lodash().find(state.blob.childStates, { apiIdentifier });
      if (maybeChildState) {
        historyPath.push("children");
        historyPath.push(apiIdentifier);
        path.push(apiIdentifier);
        state = mapper.stateKeyToData(maybeChildState.key);
        continue;
      }
    }
    break;
  }
  path.pop();
  while (state.blob.initialChildStateKey) {
    path.push(state.blob.apiIdentifier);
    state = mapper.stateKeyToData(state.blob.initialChildStateKey);
  }
  if (Globals.platformModules.lodash().isEmpty(path)) {
    return state.apiIdentifier;
  }
  return Globals.platformModules.lodash().set({}, path, state.apiIdentifier);
};
const _doStateTransition = (currentHistory, currentState, toState, mapper, record) => {
  const newHistory = computeStateHistory(currentHistory, currentState);
  const newState = computeStateValueFor(newHistory, toState, mapper);
  record.state = newState;
  record.stateHistory = newHistory;
  return { newState, newHistory };
};
const doStateTransition = (context, mapper) => {
  const toState = mapper.stateKeyToData(context.transition.toStateKey);
  const currentState = Globals.platformModules.lodash().cloneDeep(context.record.state);
  const currentHistory = Globals.platformModules.lodash().cloneDeep(context.record.stateHistory);
  return _doStateTransition(currentHistory, currentState, toState, mapper, context.record);
};
const persistStateTransition = async (newState, newHistory, context) => {
  if (context.record.changed("state") || context.record.changed("stateHistory")) {
    await updateState(context, newState, newHistory);
  }
};
const updateState = async ({ api, model, record, scope, logger }, newState, stateHistory) => {
  if (record.id && !scope.recordDeleted) {
    await api.internal[model.apiIdentifier].update(record.id, { [model.apiIdentifier]: { state: newState, stateHistory } });
    logger.debug("updated record state");
  }
};
import { StateMapper, isStateHistoryValue, isStateValue } from "./StateMapper";
export {
  StateMapper,
  _doStateTransition,
  checkCanExecute,
  computeStateHistory,
  computeStateValueFor,
  doStateTransition,
  isStateHistoryValue,
  isStateValue,
  persistStateTransition,
  possibleTransitionStates,
  updateState
};
//# sourceMappingURL=index.js.map
