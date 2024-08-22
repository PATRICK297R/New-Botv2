let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Masukkan Url`
m.reply(wait)
let res = await (await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=patricksus&url=${text}`)).buffer()
await conn.sendFile(m.chat, res, 'eror.mp3', '', m)
}
handler.tags = ['downloader']
handler.help = ['tiktokmp3', 'tiktokmusic']
handler.command = /^(tiktokmp3|tiktokmusic)$/i

module.exports = handler