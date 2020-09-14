import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {

  state = { toggle: false, date: new Date() }

  toggleHandler = () => {

    this.setState(prevstate => ({ toggle: !prevstate.toggle }))
  }


  render() {

    let days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    let time = `${this.state.date.getHours()}:${this.state.date.getMinutes() < 10 ? '0' + this.state.date.getMinutes() : this.state.date.getMinutes()}:${this.state.date.getSeconds() < 10 ? '0' + this.state.date.getSeconds() : this.state.date.getSeconds()}`


    let todaydate = this.state.toggle ?
      `${days[this.state.date.getDay()]} ${this.state.date.getDate()} ${months[this.state.date.getMonth()]} ${this.state.date.getFullYear()}`
      : null

    return (
      <div className={classes.clockheader}>
        <header>
          <h1>Digital Clock</h1>
        </header>

        <div className={classes.clock}>

          <button className={classes.togglediv} type="" id="togglebtn" onClick={this.toggleHandler}><h4>DATE</h4></button>
          <div className={classes.Clockdiv}>
            <label id="time" className={classes.Time}>{time}</label>
            <div>
              <label id="date" className={classes.Date}>{todaydate}</label>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
