let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply(wait)
let res = await (await fetch('https://api.lolhuman.xyz/api/sticker/anjing?apikey=patricksus')).buffer()
conn.sendFile(m.chat, res, '', '', m)
}
handler.tags = ['sticker', 'internet', 'image']
handler.help = ['doge']
handler.command = /^doge$/i

module.exports = handler