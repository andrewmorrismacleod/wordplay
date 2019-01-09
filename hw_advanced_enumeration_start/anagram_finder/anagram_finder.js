const AnagramFinder = function (word) {
  this.word = word;
  this.alphabetisedWord = this.word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((otherWord) => {
    const alphabetisedOtherWord = otherWord.toLowerCase().split('').sort().join('');
    return (alphabetisedOtherWord === this.alphabetisedWord) && (this.word.toLowerCase() !== otherWord.toLowerCase());
  });
}

module.exports = AnagramFinder;
