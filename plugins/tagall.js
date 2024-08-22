let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
  } else {
    global.dfail('group', m, conn)
    throw false
  }
  let users = participants.map(u => u.jid)
  m.reply(`${text ? `*Pesan:* ${text}\n\n` : ''}〔 Tag All 〕\n` + users.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n` + '', null, {
    contextInfo: { mentionedJid: users }
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']

module.exports = handler