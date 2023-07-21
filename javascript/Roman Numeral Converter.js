function convertToRoman(num) {
  let romanNumber = [
    { numeral: "M", value: 1000 },
    { numeral: "CM", value: 900 },
    { numeral: "D", value: 500 },
    { numeral: "CD", value: 400 },
    { numeral: "C", value: 100 },
    { numeral: "XC", value: 90 },
    { numeral: "L", value: 50 },
    { numeral: "XL", value: 40 },
    { numeral: "X", value: 10 },
    { numeral: "IX", value: 9 },
    { numeral: "V", value: 5 },
    { numeral: "IV", value: 4 },
    { numeral: "I", value: 1 },
  ];
  let arabicToRoman = "";

  romanNumber.forEach((roman) => {
    while (num >= roman.value) {
      arabicToRoman += roman.numeral;
      num -= roman.value;
    }
  });
  return arabicToRoman;
}

convertToRoman(36);
