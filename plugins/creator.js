let handler = async function (m, { conn }) {
  conn.sendContact(m.chat, '6285735980188', `Owner`, m)
await time(1000)
m.reply(`Tu owner gw, chat ga penting gk bakal di bales`)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}