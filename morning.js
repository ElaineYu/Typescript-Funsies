// var wakeUp = function() {
//   console.log("I'm waking up!");
// }

// var checkPhone = function() {
//   console.log("Checking phone...")
// }

// var eatBreakfast = function() {
//   console.log("I'm eating breakfast");
// }

// // Invoke
// // BAD! Synchronous way
// wakeUp();
// checkPhone();
// eatBreakfast();

// In terminal
// node morning.js

// Node is asynchronous
// Get the same three lines in asynchronous manner

var wakeUp = function(callback) {
  console.log("I'm waking up!");
  // Callback is function
  if(callback)
    if(typeof callback === 'function')
      callback();
};

var checkPhone = function(callback) {
  console.log("Checking phone...")
  if(callback)
    if(typeof callback === 'function')
      callback();
};

var eatBreakfast = function(callback) {
  console.log("I'm eating breakfast");
  if(callback)
    if(typeof callback === 'function')
      callback();
};

// Invoke
wakeUp(function() {
  checkPhone(function() {
    eatBreakfast();
  });
});