let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.jid)
    let orang = m.sender
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `Jodohlu Adalah:
@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
    let mentionedJid = [orang, jodoh]
    await conn.sendButton(m.chat, jawab, watermark, `${command}`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['jodohku']
handler.tags = ['fun']
handler.command = /^jodoh(in|ku)$/i
handler.group = true
handler.limit = true

module.exports = handler