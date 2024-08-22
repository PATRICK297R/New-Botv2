let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply(wait)
  let res = await (await fetch('https://api.lolhuman.xyz/api/random/neko?apikey=patricksus')).buffer()
  conn.sendButtonImg(m.chat, res, `Random Neko`, watermark, 'Neko', '.neko', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler