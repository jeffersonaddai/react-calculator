import React from 'react';
import Button from '../Button';

export const ControlPanel = ({
    showHistory, clearDisplay, removeOneChar, showMemory, subMemory, addMemory, clearMemory,
    sectionClassName = "buttons--controls",
    buttonClassName = "control",
    clearText = "c",
    historyText = "history",
    memoryText = "show memory",
    addMemoryText = "M+",
    subMemoryText = "M-",
    clearMemoryText = "MC",
    removeOneText = String.fromCharCode(8592)
}) => (
  <section className={sectionClassName}>
      <Button buttonClass={buttonClassName} text={removeOneText} clickHandler={removeOneChar}/>
      <Button buttonClass={buttonClassName} text={clearText} clickHandler={clearDisplay}/>
      <Button buttonClass={buttonClassName} text={historyText} clickHandler={showHistory}/>
      <Button buttonClass={buttonClassName} text={addMemoryText} clickHandler={addMemory}/>
      <Button buttonClass={buttonClassName} text={subMemoryText} clickHandler={subMemory}/>
      <Button buttonClass={buttonClassName} text={clearMemoryText} clickHandler={clearMemory}/>
      <Button buttonClass={buttonClassName} text={memoryText} clickHandler={showMemory}/>
  </section>
);

export default ControlPanel;
