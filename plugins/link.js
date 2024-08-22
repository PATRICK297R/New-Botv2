let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `https://chat.whatsapp.com/F2i2v6BFiieAx8YMYcF1B8
Nih Ramein Ngab
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Bot Wangsaff Gc*', 'status@broadcast') 
}
handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot|grupbot|gcbot|botgc)$/i

module.exports = handler