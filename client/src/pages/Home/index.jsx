import React,{ Fragment } from 'react'
import Header from './../../components/Header'
import LeftNav from './../../components/LeftNav'
import Know from './../../components/Know'
import Doc from './../../components/Doc'
import Near from './../../components/Near'
import RichEdit from './../../components/RichEdit'
import Footer from './../../components/Footer'
import {Route ,Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import './home.less'

const { Content } = Layout;

function Home() {
  return (
    <Fragment>
      <Layout className="layout">
        <Header></Header>
        <Content className="content">
          <div>
            <LeftNav className="content_left"></LeftNav>
            <div className="content_right">
              <Switch>
                <Route path="/dashboard" exact></Route>
                <Route path="/dashboard/doc" component={Doc}></Route>
                <Route path="/dashboard/books" component={Know}></Route>
                <Route path="/dashboard/groups" component={RichEdit}></Route>
                <Route path="/dashboard/collaborations"></Route>
                <Route path="/dashboard/topics"></Route>
                <Route path="/dashboard/history" component={Near}></Route>
                <Redirect from="/home" to="/dashboard"></Redirect>
              </Switch>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default Home;
