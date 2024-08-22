let fetch = require ('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let qr = 'https://telegra.ph/file/744b774cf88b1338bd555.jpg'
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana=
╠➥ No Dana :085735980188
║    Jangan lupa kirim bukti pembayaran ke
║    wa.me/6285735980188
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR WELCOME*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*(walau ada yang eror)
║   *FITUR LAINNYA*
║ 
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 R-Txzy 〙 ═
`.trim()

conn.sendButtonImg(m.chat, await (await fetch(qr)).buffer(), info, watermark, 'Owner', '.owner', m) 
}
handler.help = ['viadana']
handler.tags = ['info']
handler.command = /^viadana$/i

module.exports = handler
