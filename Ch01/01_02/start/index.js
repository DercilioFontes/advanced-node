const delayPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The long delay has ended");
    }, seconds * 1000);
  });

// function delay(seconds, callback) {
//   setTimeout(callback, seconds * 1000);
// }

// delay(1, () => {
//   console.log("one second");
// });

// delayPromise(1).then((message) => {
//   console.log("Promise delay: " + message);
// });

delayPromise(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log("Hello World: " + number));

console.log("end first tick");
