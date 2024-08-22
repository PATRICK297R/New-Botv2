let handler = async (m, { conn, text }) => {

if (!text) throw `Tag Orangnya!`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
await m.reply(`${conn.getName(who)}`)
}
handler.help = ['getname @user']
handler.tags = ['group']
handler.command = /^getname$/i

handler.group = true

module.exports = handler