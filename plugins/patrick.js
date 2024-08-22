let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply(wait)
let res = await (await fetch('https://api.lolhuman.xyz/api/sticker/patrick?apikey=patricksus')).buffer()
conn.sendFile(m.chat, res, '', '', m)
}
handler.tags = ['sticker', 'internet', 'image']
handler.help = ['patrick']
handler.command = /^patrick$/i

module.exports = handler