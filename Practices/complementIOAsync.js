const fs = require("fs");

function say(filename,cb){
    return fs.readFile(filename, function(contents,cb){
        cb(contents);
    });
}

module.exports = say;