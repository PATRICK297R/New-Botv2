let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let res = await (await fetch('https://api.lolhuman.xyz/api/random/quotesimage?apikey=patricksus')).buffer()
conn.sendFile(m.chat, res, '', '', m)
}
handler.tags = ['quotes']
handler.help = ['qimage', 'quotesimage']
handler.command = /^(qimage|quotesimage)$/i

module.exports = handler