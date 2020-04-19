import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';

function App({ newValue }) {
  const [inputValue, setInputValue] = useState('');
  
  const inputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
  );
}

const mapStateToProps = state => ({
  newValue: state.clickState.newValue
});

export default connect(mapStateToProps)(App);
