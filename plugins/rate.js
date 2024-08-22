let handler = async (m, { conn }) => {
conn.reply(m.chat, `${Math.floor(Math.random() * 100)}%`, m)
}
handler.tags = ['kerang']
handler.help = ['rate <teks>']
handler.command = /^rate$/i

module.exports = handler