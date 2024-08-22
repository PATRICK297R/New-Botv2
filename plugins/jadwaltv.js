let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  m.reply(wait)
  let res = await fetch('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
  let json = await res.json()
  let caption = `
Jam: ${json.result.jam}
Jadwal Tv: 
${json.result.jadwalTV}
`.trim()
  conn.reply(m.chat, caption, m)
}
handler.help = ['jadwaltv']
handler.tags = ['internet']
handler.command = /^(jadwaltv)$/i

module.exports = handler