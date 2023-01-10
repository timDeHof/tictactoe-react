import React from "react"
import "./square.css"

export const Square = ({ value, onSquareClick }) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}
