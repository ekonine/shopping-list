import React from 'react';

const EnterItemBox = ({ enteredItem, resetClick, addClick, textValue, onTextChange }) => {
    return (
      <div>
        <input 
          className="ma2" 
          value={textValue} 
          onKeyPress={enteredItem}
          onChange={onTextChange}
          placeholder='Enter Shopping Item'
        />
        <div 
        className="br4 f4 pt1 pb2 pr3 pl3 bg-light-red b--white white shadow-3-ns ma2 dib pointer" 
        onClick={addClick}
        >
          Add
        </div>
        <div 
          className="br4 f4 pt1 pb2 pr3 pl3 bg-light-red b--white white shadow-3-ns ma2 dib pointer" 
          onClick={resetClick}
        >
          Reset
        </div>
      </div>
    );
}

export default EnterItemBox;