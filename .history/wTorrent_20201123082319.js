'use strict'

const WebTorrent = require('WebTorrent-hybrid');
const fs = require('fs');
const torrentId = process.argv[2];
console.log('torrent id:- \t'+torrentId);
const client = new WebTorrent();

client.add(torrentId, torrent =>{
    const files = torrent.files;
    let length = files.length;
    console.log('Number of files:- \t'+length);
    files.forEach(file=>{
        const source = file.createReadStream();
        const destination = fs.createWriteStream(file.name);
        source.on('end',()=>{
              console.log('file: \t\t', file.name);
        }).pipe(destination)

    })
})