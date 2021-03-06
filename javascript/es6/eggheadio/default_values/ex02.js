function receive(complete) {
  complete();
}

receive(() => {
  console.log('complete');  // output: complete
});
