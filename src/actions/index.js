import { combineReducers } from 'redux';
import { expressionReducer } from './expression';
import { showHistoryReducer, historyReducer } from './history';
import {showMemoryReducer, memoryReducer} from "./memory";

export default combineReducers({
  curExpression: expressionReducer,
  showHistory: showHistoryReducer,
  history: historyReducer,
  memory: memoryReducer,
  showMemory: showMemoryReducer
});
