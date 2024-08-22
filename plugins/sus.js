let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply(wait)
let res = await (await fetch('https://api.lolhuman.xyz/api/sticker/amongus?apikey=patricksus')).buffer()
conn.sendFile(m.chat, res, '', '', m)
}
handler.tags = ['sticker', 'internet']
handler.help = ['amongus']
handler.command = /^amongus$/i

module.exports = handler