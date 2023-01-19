import React from "react"
import "./board.css"
import { Square } from "../square/square"
import { Typography, Box } from "@mui/material"

export const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    onPlay(nextSquares)
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <>
      <Typography variant='body1' sx={{ textAlign: "center" }}>
        {status}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", my: "auto", width: 200 }}>
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </Box>
    </>
  )
}
