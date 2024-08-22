let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let [text1, text2] = text.split `|`
if (!text1) throw `Example: .sadboylogo Loli|Chan`
if (!text1) throw `Example: .sadboylogo Loli|Chan`
  m.reply('proses..')
  let res = await (await fetch(`https://melcanz.com/sadboy?nama=${text1}&nama2=${text2}&apikey=5NHZav7F`)).buffer()
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(sadboylogo)$/i
handler.register = true

handler.limit = true

module.exports = handler
