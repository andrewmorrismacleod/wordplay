const IsogramFinder = function (word) {
  this.word = word;
  this.alphabetisedWordArray = this.word.toLowerCase().split('');

}

IsogramFinder.prototype.isIsogram = function () {
  return !this.alphabetisedWordArray.some((letter) => {
    const firstIndex = this.alphabetisedWordArray.indexOf(letter);
    const lastIndex = this.alphabetisedWordArray.lastIndexOf(letter);
    return firstIndex !== lastIndex;
  });
}

module.exports = IsogramFinder;
