import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App/>
          <style>
        #go-to-repo{
            position: absolute;
            bottom: 0px;
            height: 150px;
            width: 100vw;
            background-color: rgba(6, 90, 247, 0.5);
            text-align: center;
            padding-top: 30px;
            z-index: 10;
            color: white;
            
        }
        #go-button{
            height: 60%;
            width: 20%;
            margin-right: 4%;
            font-size: 2vh;
            background-color: rgb(77, 76, 76);
            transition: 1s;
        }
        #go-button:hover{
            width: 25%;
            height: 70%;
            background-color: rgb(43, 41, 41);
        }
    </style>
    <div id="go-to-repo">
        <a href="https://github.com/K-Wiczling/Snake/blob/master/index.html"><input type="button" id="go-button" value="Go to the repository" ></a>
    </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
