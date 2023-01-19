import React from "react"
import "./square.css"
import { Button } from "@mui/material"

export const Square = ({ value, onSquareClick }) => {
  return (
    <Button
      variant='outlined'
      sx={{ width: 50, height: 50 }}
      className='square'
      onClick={onSquareClick}
    >
      {value}
    </Button>
  )
}
