'use strict'
const phoneList = require('./phone-list.js');

exports.findPhone = function (searchString) {
  const result = [];
  console.log(result);
  for (let item of phoneList) {
    for (let field of item) {
      console.log(result)
      if (field.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
        result.push({ 'Retail Branding': item[0], 'Marketing Name': item[1], 'Device': item[2], 'Model': item[3] });
        break;
      }
    }
  }
  return result;
}
