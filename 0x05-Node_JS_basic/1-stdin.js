// eslint-disable-next-line
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// eslint-disable-next-line
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// eslint-disable-next-line
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
