
const sentence = "hello there from lighthouse labs";
let time = 0;
let str = "hello\nthere"
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 50;
}
setTimeout(() => {
  console.log("\n") }, time) 




