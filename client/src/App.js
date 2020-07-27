import React,{Fragment} from 'react';
import './App.less';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Doc from './components/Doc'
import Footer from './components/Footer'
import logo from './assets/images/logo.png'
import {BrowserRouter as Router , Route ,Switch, Redirect} from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;
function App() {
  return (
    <Fragment>
      <Layout className="layout">
        <Header></Header>
        <Content className="content">
          <div>
            <LeftNav className="content_left"></LeftNav>
            <div className="content_right">
              <Switch>
                <Route path="/dashboard" component={Doc}></Route>
                <Route path="/dashboard/doc" component={Doc}></Route>
                <Route path="/dashboard/books" component={Doc}></Route>
                <Route path="/dashboard/groups" component={Doc}></Route>
                <Route path="/dashboard/collaborations" component={Doc}></Route>
                <Route path="/dashboard/topics" component={Doc}></Route>
                <Route path="/dashboard/history" component={Doc}></Route>
                <Redirect from="/" to="/dashboard"></Redirect>
              </Switch>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
