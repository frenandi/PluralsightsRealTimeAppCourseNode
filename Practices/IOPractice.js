var args = require('minimist')(process.argv.slice(2));

var say = require("./complementIO");

console.log(say(args.file).toString());