import React from 'react';
import Button from '../Button';
export const Operators = ({
  operators = ["+", "-", "*", "/"],
  calculateSign = "=",
  className = "buttons--operators",
  operatorClickHandler, calculateExpression, calculateSquareExpression, calculateInverseExpression
}) => (
    <section className={className}>
        {operators.map((op, i) => (
            <Button key={i} text={op} clickHandler={operatorClickHandler}/>)
        )}
        <Button text={calculateSign} clickHandler={calculateExpression}/>
        <Button text="x2" clickHandler={calculateSquareExpression}/>
        <Button text="1/x" clickHandler={calculateInverseExpression}/>
    </section>
)

export default Operators;
