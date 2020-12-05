'use strict'

const WebTorrent = require('WebTorrent-hybrid');
const fs = require('fs');
const torrentId = process.argv[2];
console.log('torrent id:- \t'+torrentId);
const client = new WebTorrent();