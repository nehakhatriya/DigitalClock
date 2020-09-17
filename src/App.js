import React, { Component } from 'react';
import Home from './Home'
import Layout from './Layout';
import {Route, Switch} from 'react-router-dom' 
import classes from './App.module.css'

class App extends Component {
  render() {
    return (
   <div>
     <Layout>
       <Switch>
      <Route path={'/projects'} exact render={()=><h1><p className={classes.text}>You Choose <strong>Projects</strong></p></h1>}/>
      <Route path={'/services'} exact render={()=><h1><p className={classes.text}>You Choose <strong>Services</strong></p></h1>}/>
      <Route path={'/contact'} exact render={()=><h1><p className={classes.text}>You Choose <strong>Contact</strong></p></h1>}/>
      <Route path={"/"} exact component={Home}/>
       </Switch>
      </Layout>
  </div>
    );
  }
}

export default App;
