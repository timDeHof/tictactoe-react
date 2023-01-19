import React, { useState } from "react"
import { Board } from "../board/board"
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material"
import ReplayIcon from "@mui/icons-material/Replay"
import "./game.css"

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? `You are at move #${move}` : "Go to game Start"

    return (
      <ListItem key={move} disablePadding>
        <ListItemButton component='button' onClick={() => jumpTo(move)}>
          <ListItemIcon sx={{ color: "inherit", position: "absolute", left: -6 }}>
            <ReplayIcon fontSize='small' />
          </ListItemIcon>
          {description}
        </ListItemButton>
      </ListItem>
    )
  })

  return (
    <div className='game'>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          py: 3,
          minWidth: 400,
          minHeight: 400,
        }}
      >
        <Typography variant='h3' sx={{ m: 0, textAlign: "center" }}>
          Tic-Tac-Toe
        </Typography>
        <Grid container justifyContent='center' my='auto' alignContent='center' spacing={4}>
          <Grid item>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </Grid>
          <Grid justifyContent='center' item>
            <Typography variant='body1' sx={{ textAlign: "center" }}>
              Log
            </Typography>
            <List>{moves}</List>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
