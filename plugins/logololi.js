let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://melcanz.com/lolimaker?nama=${response[0]}&nama2=undefined&apikey=5NHZav7F`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logololi)$/i
handler.register = true

handler.limit = true

module.exports = handler