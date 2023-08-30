function isPalindrome(word) {
  const normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedWord = normalizedWord.split('').reverse().join('');

  return normalizedWord === reversedWord;
}

/* 
  Add your pseudocode here
  FUNCTION isPalindrome(word):
    normalizedWord = normalizeWord(word)
    reversedWord = reverseString(normalizedWord)

    IF normalizedWord is equal to reversedWord:
      RETURN true
    ELSE:
      RETURN false
  END FUNCTION
*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks if a given word is a palindrome. It first normalizes the word by converting it to lowercase and removing non-alphanumeric characters. Then, it reverses the normalized word and compares it with the original normalized word. If they are the same, the function returns true, indicating that the word is a palindrome; otherwise, it returns false.
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