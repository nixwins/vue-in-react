import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Document1 from "./routes/Document1"
import Document2 from "./routes/Document2"

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/document1" element={<Document1/>}/>
      <Route path="/document2" element={<Document2/>}/>
      </Route>
    </Routes>

    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
