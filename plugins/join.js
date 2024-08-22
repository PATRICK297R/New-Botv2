let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let user = global.db.data.users[m.sender]
let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    if (users.joincount === 3) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
    let res = await conn.acceptInvite(code)
    user.joincount += 1
    m.reply(`Berhasil join grup ${res.gid}`)
    
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler