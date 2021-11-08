const promises = require('fs/promises');
const fs = require('fs');
const path = require('path');
const link = path.join(__dirname, 'styles')
async function copyFile() {
    const files = await promises.readdir(link, { withFileTypes: true });
    let arrCss = []

    function readable(name) {
        let writeableStream = fs.createWriteStream(__dirname + '\\project-dist\\bundle.css');
        let readableStream = fs.createReadStream(
            link + '\\' + name,
            { encoding: 'utf8' }
        );
        readableStream.on('data', async function (chunk) {
            writeableStream.write(chunk);
        });

    }

    for (const file of files) {
        if (file.isFile() && path.parse(file.name).ext === '.css') {
            readable(file.name)
        }
    }



}

copyFile()