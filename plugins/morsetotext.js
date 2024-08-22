let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Masukkan kode Morse`
let res = await fetch(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=patricksus&text=${text}`)
let json = await res.json()
if (json.status !== 200) throw eror
m.reply(`${json.result}`)
}
handler.tags = ['tools']
handler.help = ['morsetotext']
handler.command = /^morsetotext$/i

module.exports = handler