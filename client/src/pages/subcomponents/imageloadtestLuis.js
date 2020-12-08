import React, {useState } from 'react';

const loadImage = (props) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit= (e) => {
    e.preventDefault();
    setResult(input);
  }
  return (
    <React.Fragment>
      <h1>Form practice</h1>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>
          submit
      </button>
      </form>
      <h2>{result}</h2>
    </React.Fragment>
  );
}

export default loadImage 