let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Cari Apa??`
m.reply(wait)
let res = await fetch(`https://myselfff.herokuapp.com/docs/search/sfile?query=${text}`)
let json = await res.json()
let str = `
   *[ Sfile Search ]*

Title: ${json.result.title}
Size: ${json.result.size}
Url: ${json.result.url}
`.trim()
await conn.reply(m.chat, str, m)
}
handler.tags = ['internet']
handler.help = ['sfilesearch <text>']
handler.command = /^(sfilesearch|sfile)$/i

module.exports = handler