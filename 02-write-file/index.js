const readline = require('readline');
const fs = require('fs');
const path = require('path');


let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Write your text:');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', (input) => {
    if (input == 'exit') {
        console.log('Thanks!');
        writeableStream.end()
        rl.close()
    }
    else { writeableStream.write(input+'\n'); }
});
