
const fs = require('fs/promises');
const path = require('path');

const link = path.join(__dirname, 'files')


// fs.stat(link+'-copy',function(err){
//     if(err){
//         fs.rm(link+'-copy',{recursive:true,force:true})
//         console.log('lol');
//     }
//     console.log('kek');
//     fs.mkdir(link+'-copy',{recursive:true})
//     copyFile()
// })



async function copyFile() {
    await fs.rm(link + '-copy', { recursive: true, force: true })
    fs.mkdir(link + '-copy', { recursive: true })
    const files = await fs.readdir(link, { withFileTypes: true });
    for (const file of files){
        fs.copyFile(path.join(link, file.name), link + '-copy\\' + file.name)
    }
}

copyFile()
