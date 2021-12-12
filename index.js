  // longer than the shorter one(by one line), but more readable
function isPalindrome(word) {
  for (i = 0; i < Math.floor(word.length / 2); i++) {
    const j = word.length - 1 - i
    if (word[i] !== word[j]) return false
  }
  return true
}



/* 
  Add your pseudocode here

  iterate from the beggining to the middle
    check each character to the corresponding letter from the end
      if any letters don't match, return false

  if I make it to the middle and everything matches, return true
*/


/*
  Add written explanation of your solution here

  Make a function that returns true if a word is a palindrom.
  That means if the first letter is the same as the last letter,
  and the second letter is the same as the second to last letter,
  and so on, until we reach the middle.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



  // original (except Math.floor())
// function isPalindrome(word) {
//   for (i = 0; i < Math.floor(word.length / 2); i++) {
//     const j = word.length - 1 - i
//     const startChar = word[i]
//     const endChar = word[j]
//     if (startChar !== endChar) return false
//   }
//   return true
// }



  // shorter not necessarily readable though
// function isPalindrome(word) {
//   for (i = 0; i < word.length / 2; i++) {
//     if (word[i] !== word[word.length - 1 - i]) return false
//   }
//   return true
// }