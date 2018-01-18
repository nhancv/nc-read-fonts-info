//https://github.com/nodebox/opentype.js
const opentype = require('opentype.js');

try {
    var font = opentype.loadSync('./Avenir-Black-03.ttf');
    console.log(font.names);
} catch (e) {
    console.error(e);
}