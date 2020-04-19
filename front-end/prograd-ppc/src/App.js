import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { clickButton } from './actions/ClickActions';

function App({ newValue, clickButton}) {
  const [inputValue, setInputValue] = useState('');
  
  const inputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
        <input 
          type='text' 
          onChange={inputChange}
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
          </button>
        <h1>{newValue}</h1>
      </div>
  );
}

const mapStateToProps = state => ({
  newValue: state.clickState.newValue
});

const mapDispachToProps = { clickButton };

export default connect(mapStateToProps, mapDispachToProps)(App);
