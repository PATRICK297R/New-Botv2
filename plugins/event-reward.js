let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.reward === 1) throw `Kamu sudah mengeclaim hadiah reward Update! Tunggu hadiah nya next update ya!`
    if (user.reward === 0) {
        await conn.sendButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `Terimakasih sudah menggunakan Bot. kami akan menyediakan hadiah setiap kali update.\nBerikut hadiah mu:

Limit = 100
EXP = 1000000

Tunggu update selanjutnya ya!`.trim(), watermark, 'Profile', '.my')
        user.reward += 1
        user.limit += 100
        user.exp += 1000000
    }
}
handler.command = /^reward$/i
module.exports = handler