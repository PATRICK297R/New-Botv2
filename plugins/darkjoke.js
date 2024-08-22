let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let res = await (await fetch('https://api.lolhuman.xyz/api/meme/darkjoke?apikey=patricksus')).buffer()
    conn.sendButtonImg(m.chat, res, 'drag joles', watermark, 'Dark Jokes', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'image']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler