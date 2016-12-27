var generateBoard = require('./board.js').generateBoard
var Bot = require('slackbots');

// create a bot
var settings = {
    token: 'xoxb-118346854022-8olUhYwhK4LNdSd2Y3ulzeQx',
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

