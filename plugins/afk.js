let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  let { registered } = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
let str = `
  *「 AFK MODE 」*
  
*${name}* sekarang AFK

*Alasan:* ${text ? '' + text : '-'}
`.trim()
  m.reply(str)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler