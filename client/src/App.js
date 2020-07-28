import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './components/Login'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
        <Switch> 
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
    )
  }
}

export default App
