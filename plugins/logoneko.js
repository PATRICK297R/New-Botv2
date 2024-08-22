let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
   let [text1, text2] = text.split `|`
if (!text1) throw `Example: .logoneko text1|text2`
if (!text2) throw `Example: .logoneko text1|text2`
  m.reply('Proses...')
  let res = await (await fetch(`https://melcanz.com/girlneko?nama=${text1}&nama2=${text2}&apikey=5NHZav7F`)).buffer()
conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(logoneko)$/i

module.exports = handler