import React from 'react'
import classes from './Layout.module.css'
import {NavLink} from 'react-router-dom'
const layout =(props)=>{
return(
    <div>
           <ul className={classes.ul}>
           <li id="home" className={classes.li}><NavLink activeClassName={classes.active} exact to="/">Home</NavLink></li>
           <li id="projects" className={classes.li}><NavLink activeClassName={classes.active} exact to="/projects">Projects</NavLink></li>
           <li id="services" className={classes.li}><NavLink activeClassName={classes.active} exact to='/services'>Services</NavLink></li>
           <li id="contact" className={classes.li}><NavLink activeClassName={classes.active} exact to='/contact'>Contact</NavLink></li>
           </ul>
           {props.children}
    </div>

)

}
export default layout