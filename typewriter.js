const sentence = "hello there from lighthouse labs";
let timeCount = 0;
//To print each char separately after delay 
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, timeCount);
  timeCount += 50;
}
// To add new line at the end
setTimeout(() => {
  console.log("\n");
}, timeCount);
