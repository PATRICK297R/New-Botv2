let handler = async (m, { conn, text }) => {
if (!text) throw `Tag Orangnya!`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
m.reply(`${about != 401 ? '' + about : ''}`)
}

handler.help = ['getbio @user']
handler.tags = ['group']
handler.command = /^getbio$/i

handler.group = true

module.exports = handler