let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Mana Link nya??`
let anu = await fetch(`https://docs-jojo.herokuapp.com/api/shorturl-at?url=${text}`)
let json =  await anu.json()
await conn.reply(m.chat, json.result, m)
}
handler.tags = ['tools']
handler.help = ['shorturl <url>']
handler.command = /^shorturl$/i

module.exports = handler