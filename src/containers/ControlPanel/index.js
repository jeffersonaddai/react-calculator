import { connect } from 'react-redux';
import ControlPanelView from '../../components/ControlPanel';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';
import {MEMORY_ITEM_KEY, toggleMemory} from "../../actions/memory";
import {addMemory, subMemory, clearMemory} from "../../actions/memory";

export const showHistory = dispatch => dispatch(toggleHistory());
export const showMemory = dispatch => dispatch(toggleMemory());

export const removeOneChar = (dispatch, getState) => {
    const curExpression = String(getState().curExpression);
    const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

    dispatch(updateExpression(newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar));
}
export const addMemoryClickHandler = (dispatch, getState) =>{
   dispatch(addMemory(getState().curExpression));
}
export const subMemoryClickHandler = (dispatch, getState) =>{
  dispatch(subMemory(getState().curExpression));
}
export const clearClickHandler = (dispatch, getState) =>{
  dispatch(clearMemory(getState().curExpression));
}

const mapDispatchToProps = (dispatch) => ({
  showHistory: () => showHistory(dispatch),
  clearDisplay: () => dispatch(updateExpression(0)),
  removeOneChar: () => dispatch(removeOneChar),
    showMemory: () => showMemory(dispatch),
    addMemory: () => dispatch(addMemoryClickHandler),
    subMemory: () => dispatch(subMemoryClickHandler),
    clearMemory: () => dispatch(clearClickHandler)
    // clearMemory: () => clearMemory(dispatch)
    
})

export default connect(null, mapDispatchToProps)(ControlPanelView);
