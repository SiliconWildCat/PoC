import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [number, onChangeNumber] = useState(0);
  const [text, onChangeText] = useState('123123');
  const onClickAdd = () => {
    onChangeNumber(number + 1);
  };
  const onClickMinus = () => {
    onChangeNumber(number - 1);
  };
  const ChangeText = (e) => {
    onChangeText(e.target.value);
  };
  return (
    <div>
      <div style={{ margin: '200px' }}>{number}</div>
      <button onClick={onClickAdd}>+1</button>
      <button onClick={onClickMinus}>-1</button>
      <input type="text" value={text} onChange={ChangeText} />
      <div>{text}</div>
    </div>
  );
}

export default App;
