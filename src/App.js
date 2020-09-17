import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {

  state = { toggle: false, date: new Date().toLocaleTimeString() }

  toggleHandler = () => {

    this.setState(prevstate => ({ toggle: !prevstate.toggle }))
  }
  updatetime = () => {
    let newtime = new Date().toLocaleTimeString()
    this.setState({ date: newtime })
  }
  componentDidUpdate() {
    setTimeout(this.updatetime, 1000)
  }
  componentDidMount() {
    setTimeout(this.updatetime, 1000)
  }

  render() {

    let dayy = new Date();
    let todaydate = this.state.toggle ? dayy.toLocaleDateString() : null

    return (

      <div class="card" style={{width: "25%",backgroundColor:"lightgrey"}}> 
  <h3 class="card-title" style={{backgroundColor:"black",color:"white",height:"30%",textAlign:"center",padding:"10px"}}><i class="fa fa-clock-o"> Digital Clock</i></h3>
  <div class="card-body" style={{textAlign:"center"}}>
    
  
          <button type="button" id="togglebtn" onClick={this.toggleHandler}><h4>DATE</h4></button>
        <div className={classes.center}>
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
      
  </div>

     

    );
  }
}

export default App;
