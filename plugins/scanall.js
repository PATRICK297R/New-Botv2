let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
let qr = 'https://telegra.ph/file/263fbeee849d890656fac.jpg'
conn.sendButtonImg(m.chat, await (await fetch(qr)).buffer(), `Silahkan Di Scan`, `Jika sudah silahkan kirim bukti pembayaran ke owner`, 'Owner', '.owner', m)
}
handler.tags = ['info']
handler.help = ['scanall']
handler.command = /^(scanall)$/i

module.exports = handler