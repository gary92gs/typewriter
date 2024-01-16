const typeWriter = (string) => {
  const timeDelay = 100;
  for (const index in string) {
    setTimeout(() =>{
      process.stdout.write(string[index])
    },(timeDelay*index)); //sets delay between each character printing. If you don't multiply timedelay by index, each charater delay is triggered at the same time. If the delay is the same, they all get printed at the same time!!
    //Necessary for putting new line at the end of the string (stdout.write does not do this)
    if (Number(index) === (string.length - 1)) { //index is technically a string, so I need to convert it for the if statement to trigger
      setTimeout(() => {console.log()},(timeDelay*string.length))} //actually creates the newline if the loop is on the final character
  }
  
}

const sentence = "hello there from lighthouse labs";

typeWriter(sentence);