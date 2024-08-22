let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply(wait)
let res = await (await fetch('https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=patricksus')).buffer()
conn.sendFile(m.chat, res, '', '', m)
}
handler.tags = ['sticker', 'internet', 'image']
handler.help = ['gura']
handler.command = /^gura$/i

module.exports = handler