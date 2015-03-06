var readline = require("readline"),
  rl= readline.createInterface(process.stdin, process.stdout);

// Create a prompt
rl.setPrompt("$$ ");
rl.prompt();
//  At this point, does nothing with information

// Version 1
// Create a function that'll return your input
// rl.on('line', function(line) {
//   console.log("you said", line);
//   // provide input prompt again
//   rl.prompt();
// });

// Version 2
// Create an array to save information
// var toDoList = [];

// rl.on('line', function(line) {
//   toDoList.push(line);
//   console.log(toDoList);
//   rl.prompt();
// });

// Version 3
// grab first word and set as command
// rl.on('line', function(line) {
//   var words = line.split(' '),
//     command = words[0]
//   console.log("the command is", command);
//   console.log(words);
//   rl.prompt();
// });

// Version 4
// var toDoList = [];

// rl.on('line', function(line) {
//    var words = line.split(' '),
//       command = words.shift();

//    if(command === 'ls'){
//       console.log(toDoList);
//    }

//    if(command === 'add') {
//     var item = words.join(' ');
//     toDoList.push(item);
//    }
//    rl.prompt();
// });

//  Invoke
//  add foo
//  add foo bar bar


// Version 5
// Create functions instead for add, remove, etc

var commands = {
  ls:function() {
    console.log(toDoList);
  },
  add:function(item) {
    toDoList.push(item);
  }
};


var toDoList = [];

rl.on('line', function(line) {
   var words = line.split(' '),
      command = words.shift();
      argsStr = words.join();
   commands[command](argsStr);
   rl.prompt();
});

// Invoke
// add apple
// add pear
// ls
