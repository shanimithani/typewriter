
const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  let delay = 50;
  setTimeout(() => {
    process.stdout.write(sentence[index]);
  }, 1000 + (delay * index));
  if (Number(index) === sentence.length - 1) {
    process.stdout.write('\n');
  }
}

