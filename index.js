var generateBoard = require('./board.js').generateBoard
var Bot = require('slackbots');
const http = require('http');
const fs = require('fs')
console.log(fs.readFileSync('token.txt', 'utf-8').trim());
// create a bot
var settings = {
    token: fs.readFileSync('token.txt', 'utf-8').trim(),
    name: 'Betty Bot'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello channel! Enter username of someone you want to challenge. e.g @tommy');
});

// invite user to choose board size
  // generate board

// invite user to choose an opponent
  // records name of opponent

// invite user to make a move

console.log(generateBoard(3,3));

