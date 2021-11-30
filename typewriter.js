const sentence = `hello there from lighthouse labs`;

// loop through sentence and print each letter inline
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}
// wait for full time of typing (50ms * sentence.length) then console log to break the line
setTimeout(() => {
  console.log('');
}, 50 * sentence.length);
