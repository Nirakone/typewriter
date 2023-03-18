// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
//   setTimeout(() => {
//     // print the char here
//   }, 1000);
//   // <= 1s delay to make it noticeable. Can dial it down later.
// }

// for adding delay to print each letter
const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  console.log(); // Prints a new line
}, delay);
