function palindrome(str) {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

palindrome("eye");
