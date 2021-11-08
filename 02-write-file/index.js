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
        end()
    }
    else { writeableStream.write(input+'\n'); }
});


rl.on('SIGINT', () => end())

function end(){
    console.log('Thanks!');
    writeableStream.end()
    rl.close()
}