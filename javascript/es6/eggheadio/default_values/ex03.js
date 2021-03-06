function receive(complete = () => console.log('complete')) =>
  complete();
}

receive();
