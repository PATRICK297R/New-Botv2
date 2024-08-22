let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Masukkan judul`
let res = await fetch(`https://docs-jojo.herokuapp.com/api/drakor?q=${text}`)
let json = await res.json()
let str = `
*Url:* ${json.url}
*Years:*  ${json.years}
*Title:* ${json.title}
*Genre:* ${json.genre}
*Duration:* ${json.duration}
*Synopsis*:
${json.synopsis}
*Cast:* ${json.cast}
`.trim()
conn.sendFile(m.chat, json.image, 'drakor.jpg', str, m)
}
handler.tags = ['internet']
handler.help = ['drakor <judul>']
handler.command = /^drakor$/i
handler.limit = true

module.exports = handler