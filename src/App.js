import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {

  state = { toggle: false, date: new Date().toLocaleTimeString() }

  toggleHandler = () => {

    this.setState(prevstate => ({ toggle: !prevstate.toggle }))
  }
  updatetime=()=>{
    let newtime= new Date().toLocaleTimeString()
    this.setState({date:newtime})
  }
  componentDidUpdate(){
    setTimeout(this.updatetime,1000)
  }
  componentDidMount(){
    setTimeout(this.updatetime,1000)
  }

  render() {

    let dayy=new Date();
    let todaydate=this.state.toggle?dayy.toLocaleDateString():null

    return (
      <div className={classes.clockheader}>
        <h1>Digital Clock</h1>
          <button type="button" id="togglebtn" onClick={this.toggleHandler}><h4>DATE</h4></button>
        <div>
          <div className={classes.clock}>
            <label id="time">{this.state.date}</label>
            <div>
              <span>
                <label id="date">{todaydate}</label>
              </span>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
