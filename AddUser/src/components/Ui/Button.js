import React from 'react'
import classes from './Button.module.css';


function Button(props) {
  return ( // if props type is undifiend - button value
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>

        {props.children}
    </button>
  )
}

export default Button