let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = await (await fetch(`https://melcanz.com/rem?nama=${response[0]}&apikey=5NHZav7F`)).buffer()
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(logorem|remlogo)$/i
handler.register = true

handler.limit = true

module.exports = handler