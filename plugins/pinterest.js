let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Cari apa?`
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=patricksus&query=${text}`)
let json = await res.json()
if (json.status !== 200) throw json.message
conn.sendFile(m.chat, json.result, 'pin.jpg', `Image Url: ${json.result}`, m)
}
handler.help = ['pinterest <pencarian>']
handler.tags = ['internet']
handler.command = /^(pin|pinterest)$/i

module.exports = handler