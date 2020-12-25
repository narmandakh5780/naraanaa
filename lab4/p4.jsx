import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';
const Switchs = () => {
  const [check, setState] = useState(false);
  console.log(check)
  if (check === false) {
    return (
      <div>
        <button onClick={() => setState(true)}>To Example</button>
        <States />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => setState(false)}>To State</button>
        <Example />
      </div>
    )
  } 
}
ReactDOM.render(
  <Switchs />,
  document.getElementById('root')
);
