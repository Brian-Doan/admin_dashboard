import React from 'react'

const Button = ({ color, bgColor, size, width, text, borderRadius, optionalStyle}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} ${optionalStyle}`}
    >
      {text}
    </button>
  )
}

export default Button