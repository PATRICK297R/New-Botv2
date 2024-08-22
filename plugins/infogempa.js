let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  m.reply(wait)
  let res = await fetch('https://docs-jojo.herokuapp.com/api/infogempa')
  let json = await res.json()
  let caption = `
*Lokasi:* ${json.lokasi}
*Waktu:* ${json.waktu}
*Magnitude:* ${json.magnitude}
*Kedalaman:* ${json.kedalaman}
*Koordinat:* ${json.koordinat}
`.trim()
  conn.sendFile(m.chat, json.map, 'map.jpg', caption, m)
}
handler.help = ['infogempa']
handler.tags = ['internet']
handler.command = /^(infogempa)$/i

module.exports = handler