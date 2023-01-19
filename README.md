# Tic Tac Toe

A classic game of Tic Tac Toe built using ReactJS and Material-UI. 

## Installation

To install and run the game, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/tic-tac-toe.git
```
2. Install the dependencies:
```
npm install
```
3. Start the development server:
```
npm start
```
The game should now be running at [http://localhost:3000](http://localhost:3000)

## How to play

The game is played on a 3x3 board. Players take turns placing their mark (X or O) on an empty square. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Features

- Responsive design using Material-UI
- Game state is managed using the `useState` hook
- Game logic is implemented using JavaScript
- Detects the winner or a draw

## To Dos

- [x] For the current move only, show “You are at move #…” instead of a button
- [x] Rewrite `Board` to use two loops to make the squares instead of hardcoding them.
- [ ] Add a toggle button that lets you sort the moves in either ascending or descending order.
- [ ] When someone wins, highlight the three squares that caused the win (and when no one
      wins,display a message about the result being a draw)
- [ ] Display the location for each move in the format (col, row) in the move history list.
- [ ] Add a reset button to start a new game
- [ ] Add a scoreboard to keep track of the number of wins for each player
- [ ] Add the ability to play against the computer
- [ ] Add option to change the board size to play a bigger game.

## Contributing

If you're interested in contributing to the project, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the beautiful and functional UI components
- ReactJS for the powerful and flexible framework

Hope you enjoy the game!

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn't feel obligated to use this feature. However we understand that this
tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
