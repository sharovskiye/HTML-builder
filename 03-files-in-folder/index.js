const fs = require('fs/promises');
const path = require('path');

async function nameFile(link) {
    const files = await fs.readdir(link, { withFileTypes: true });
    for (const file of files)
    if(file.isFile()){
        console.log(`${path.parse(file.name).name} - ${path.parse(file.name).ext.slice(1)} - ${(await fs.stat(path.join(link, file.name))).size / 1024}kb`);

    }
}

nameFile(path.join(__dirname, 'secret-folder'))
