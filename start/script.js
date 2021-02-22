// After the object literal, create a new property (using dot OR bracket notation) called characters.
// This property should be set to the number of characters in the phrase held in the string property.
const myString = {
  string: 'Programming with Treehouse is fun!',
  countWords: function() {
    const words = this.string.split(' ');
    return words.length;
  }
};
const numWords = myString.countWords();