// process.nextTick
// function hideString(str, done) {
//   process.nextTick(() => {
//     done(str.replace(/[a-zA-Z]/g, "X"));
//   });
// }

// function done(hidden) {
//   console.log(hidden);
// }

// hideString("Hello World", done);

// console.log("end");

// setTimeout
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("starting delays");

delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});

console.log("finishing delays");
