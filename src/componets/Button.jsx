import React from 'react'
import './Button.css'

const button = props => {
   return(
      <button className="button">{props.label}</button>
   )
}

export default button