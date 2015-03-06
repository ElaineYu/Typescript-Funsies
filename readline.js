var readline = require("readline"),
  rl= readline.createInterface(process.stdin, process.stdout);

// Create a prompt
rl.setPrompt("$$ ");
rl.prompt();
//  At this point, does nothing with information

// Version 1
// Create a function that'll return your input
rl.on('line', function(line) {
  console.log("you said", line);
  // provide input prompt again
  rl.prompt();
});

// Version 2
// Create an array to save information
var toDoList = [];

rl.on('line', function(line) {
  toDoList.push(line);
  console.log(toDoList);
  rl.prompt();
});