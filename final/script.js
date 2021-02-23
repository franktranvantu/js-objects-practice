// After the object literal, change the value of myString's string property to "I love full stack JavaScript".

const myString = {
  string: "Programming with Treehouse is fun!",
  countWords: function(){
    const wordArray = this.string.split(' ');
    return wordArray.length;
  }
}

myString.characters = myString.string.length;
myString.string = 'I love full stack JavaScript';

var numWords = myString.countWords();
