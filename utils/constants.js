const regexForUrl = /^(https?:\/\/)?([\w]{1,32}\.[\w]{1,32})[^]*$/;
const regexForRuWords = /(([0-9]{1,32})?\s?\W?[а-яёЁА-Я]\W?\s?([0-9]{1,32})?\W?)+/;
const regexForEnWords = /(([0-9]{1,32})?\s?\W?[a-zA-Z]\W?\s?([0-9]{1,32})?\W?)+/;

module.exports = {
  regexForUrl,
  regexForRuWords,
  regexForEnWords,
};
