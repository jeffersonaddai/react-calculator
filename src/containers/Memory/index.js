import { connect } from 'react-redux';
import MemoryView from '../../components/Memory';
import { toggleMemory } from '../../actions/memory';
import { updateExpression } from '../../actions/expression';

export const memoryItemClickHandler = dispatch => memory => {
    dispatch(updateExpression(memory));
    dispatch(toggleMemory());
}

const mapDispatchToProps = (dispatch) => ({
    memoryItemClickHandler: memoryItemClickHandler(dispatch),
    toggleMemory: () => dispatch(toggleMemory()),

})

export default connect(null, mapDispatchToProps)(MemoryView);
