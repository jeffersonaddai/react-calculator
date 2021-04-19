import { connect } from 'react-redux';
import OperatorsView from '../../components/Operators';
import { updateExpression } from '../../actions/expression';

export const operatorClickHandler = (type) => (dispatch, getState) =>
  dispatch(updateExpression(`${getState().curExpression} ${type} `));

export const calculateExpression = (dispatch, getState) => {
    /* eslint-disable */
    // This rule is important in production apps!
    // Read more: https://eslint.org/docs/rules/no-eval
    // To simplify the functionality in this course we use eval
    const calcFunc = eval;
    /* eslint-enable */
    try {
        console.log(getState())
        dispatch(updateExpression(calcFunc(getState().curExpression)));
    } catch (e) {
        console.error("Error: Incorrect Expression of digits & operators :(")
    }
}
export const calculateSquareExpression = (dispatch, getState) =>{
    try {
        dispatch(updateExpression(Math.pow(getState().curExpression, 2)))
    }catch (e){
        console.error("Error: Incorrect Expression of digits & operators :(");
    }
}
export const calculateInverseExpression = (dispatch, getState) =>{
    const calcFunc = eval;
    try {
        dispatch(updateExpression(calcFunc(`1/${(getState().curExpression)}`)))
    }catch (e){
        console.error("Error: Incorrect Expression of digits & operators :(");
    }
}

export const mapDispatchToProps = dispatch => ({
    operatorClickHandler: operator => dispatch(operatorClickHandler(operator)),
    calculateExpression: () => dispatch(calculateExpression),
    calculateSquareExpression: () => dispatch(calculateSquareExpression),
    calculateInverseExpression: () => dispatch(calculateInverseExpression)
})

export default connect(null, mapDispatchToProps)(OperatorsView);
