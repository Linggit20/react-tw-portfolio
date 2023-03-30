import React from 'react'

const Button = ({text, className, icon}) => {
  return (
    <>
      <button className={className}>{text}{icon}</button>
    </>
  )
}

export default Button