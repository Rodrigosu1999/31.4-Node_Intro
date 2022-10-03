const fs = require('fs');

const argv= process.argv;

function cat (file){
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            process.kill(1);
        } else {
            console.log(data);
        }
    })
}

cat(argv[2]);