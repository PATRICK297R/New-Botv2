let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Masukkan URL`
m.reply(wait)
let res = await fetch(`https://melcanz.com/tiktok3?url=${text}&apikey=5NHZav7F`)
let json = await res.json()
if (json.status !== true) throw eror
let str = `
*-By:* ${json.author}
*-Caption:*
${json.title}
`.trim()
conn.sendFile(m.chat, json.nowm, 'error.mp4', str, m)
}
handler.tags = ['downloader']
handler.help = ['tiktok2 <url>', 'tt2 <url>']
handler.command = /^(tiktok2|tt2)$/i
handler.limit = true

module.exports = handler