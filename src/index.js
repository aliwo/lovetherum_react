import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

console.log(process.env);
console.log(process.env.NODE_URL);
console.log(process.env.REACT_APP_TEMP);

ReactDOM.render(<App />, document.getElementById('root'));
