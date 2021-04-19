import React from 'react';
import Button from '../Button';

export const Memory = ({
    showMemory, memory, toggleMemory,memoryItemClickHandler,
    memoryItemButtonClassName = "block transparent",
    closeButtonText = "+",
    closeButtonClassName = "toggle-close",
    className = "memory"
}) => (
    <section className={`${className} ${showMemory ? 'visible' : ''}`}>
        <Button text={closeButtonText} clickHandler={toggleMemory} buttonClass={closeButtonClassName}/>
            <Button buttonClass={memoryItemButtonClassName}
                    text={memory} clickHandler={memoryItemClickHandler}/>
    </section>
);

export default Memory;
