function rot13(str) {
  let newStr = str.toUpperCase().split("");
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  newStr.forEach((chr, idx) => {
    let index = alphabet.indexOf(chr);
    if (/[A-Z]/.test(chr)) {
      if (index - 13 < 0) {
        newStr[idx] = alphabet[index - 13 + alphabet.length];
      } else {
        newStr[idx] = alphabet[index - 13];
      }
    }
  });

  return newStr.join("");
}

rot13("SERR PBQR PNZC");
