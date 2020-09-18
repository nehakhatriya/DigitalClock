import React, { Component } from 'react';
import classes from './Clock.module.css';

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
      <div className="CLOCK">
        <div className="card" style={{ width: "100%", backgroundColor: "white" }}>
          <h3 className="card-title" style={{ backgroundColor: "black", color: "white", height: "30%", textAlign: "center", padding: "10px" }}><i className="fa fa-clock-o"> Digital Clock</i></h3>
          <div className="card-body" style={{ textAlign: "center" }}>

            <div>
              <label className={classes.switch}>
                <input type="checkbox" onClick={this.toggleHandler} id="togglebtn" />
                <span className={[classes.slider, classes.round].join(' ')}></span>
              </label>
            </div>
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

      </div>

    );
  }
}

export default App;
