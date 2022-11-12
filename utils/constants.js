const regexForRuWords = /(([0-9]{1,32})?\s?\W?[а-яёЁА-Я]\W?\s?([0-9]{1,32})?\W?)+/;
const regexForEnWords = /(([0-9]{1,32})?\s?\W?[a-zA-Z]\W?\s?([0-9]{1,32})?\W?)+/;
const regexForIntegerNumber = /(?<=^|\s)[0-9]+(?=$|\s)/;

module.exports = {
  regexForRuWords,
  regexForEnWords,
  regexForIntegerNumber,
};
