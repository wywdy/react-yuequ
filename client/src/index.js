import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom' 
import {ConfigProvider} from 'antd'
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import './assets/font/iconfont.css'

ReactDOM.render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>,  document.getElementById('root')
);


