let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let anu = await fetch('https://api.lolhuman.xyz/api/random/pantun?apikey=patricksus')
let json = await anu.json()
if (json.status !== 200) throw eror
conn.sendButton(m.chat, json.result, watermark, 'Pantun', '.pantun', m)
}
handler.tags = ['quotes']
handler.help = ['pantun']
handler.command = /^pantun$/i

module.exports = handler