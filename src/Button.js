import React from 'react'
import './index.css'

const Button = ({ request, setRequest, buttonText }) => {
  return (
    <button
        className = {buttonText === request ? "selected" : null}
        onClick={() => setRequest(buttonText)}
    >
        {buttonText}
      
    </button>
  )
}

export default Button
