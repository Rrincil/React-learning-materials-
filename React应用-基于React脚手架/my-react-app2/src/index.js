//引入react核心库
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// reportWebVitals.js用于记录页面性能
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 17.0版本之后增加<React.StrictMode>（jsx写法） 在严格模式下检查是否代码合理
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
