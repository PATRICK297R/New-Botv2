let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = await (await fetch('https://api.lolhuman.xyz/api/meme/memeindo?apikey=patricksus')).buffer()
await conn.sendButtonImg(m.chat, url, 'Meme', watermark, 'Meme', '.meme', m)
}
handler.help = ['meme']
handler.tags = ['internet', 'image']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler