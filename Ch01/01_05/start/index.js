var fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const delay = (seconds) =>
  new Promise((resolve, rejects) => {
    setTimeout(resolve, seconds * 1000);
  });
var beep = () => process.stdout.write("\x07");

const doStuffSequentially2 = () =>
  Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1))
    .then(() => console.log("waiting"))
    .then(() => delay(2))
    .then(() => {
      console.log("waiting some more");
      return writeFile("file.txt", "Sample File...");
    })
    .then(() => {
      beep();
      console.log("file.txt created");
      return delay(3);
    })
    .then(() => {
      beep();
      return unlink("file.txt");
    })
    .then(() => {
      console.log("file.txt removed");
      console.log("sequential execution complete");
    })
    .catch(console.error);

const doStuffSequentially = () => {
  console.log("starting");
  setTimeout(() => {
    console.log("waiting");
    setTimeout(() => {
      console.log("waiting some more");
      fs.writeFile("file.txt", "Sample File...", (error) => {
        if (error) {
          console.error(error);
        } else {
          beep();
          console.log("file.txt created");
          setTimeout(() => {
            beep();
            fs.unlink("file.txt", (error) => {
              if (error) {
                console.error(error);
              } else {
                console.log("file.txt removed");
                console.log("sequential execution complete");
              }
            });
          }, 3000);
        }
      });
    }, 2000);
  }, 1000);
};

// doStuffSequentially();
doStuffSequentially2();
