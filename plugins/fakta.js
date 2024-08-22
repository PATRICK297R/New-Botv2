let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://api.lolhuman.xyz/api/random/faktaunik?apikey=patricksus')
  f = await ddd.json()
if (f.status !== 200) throw eror
  conn.sendButton(m.chat,`${f.result}`, `Fakta Unik`, 'Fakta', '.fakta', m)
} 
handler.help = ['fakta']
handler.tags = ['internet']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler