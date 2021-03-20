const fs = require("fs");
// const book = {
//     title: 'Book name',
//     author: 'Author1'
// }
// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);
const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
let data = JSON.parse(dataJson);
const name = 'mxie';
const age = 26;
const planet = 'earth';
data = {...data, name, age, planet};
console.log(data.name);
const updateJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', updateJson);