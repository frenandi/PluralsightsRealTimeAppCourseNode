var args = require('minimist')(process.argv.slice(2));

var say = require("./complementIOAsync");

say(args.file,function(err,contents){
    if(err) {
        console.error("error",err)
    }
    else{
    console.log(contents.toString());
    }
});