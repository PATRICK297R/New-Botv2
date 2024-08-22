//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Beli Premium')).buffer(), `
┌〔 BuyPremium〕5K
├ Pulsa: 085735980188
├ Pulsa: 085815212637
├ Qris: Klik Button "Scan All Payment"
└────
Jangan Lupa Kirim Bukti Pembayaran Ke Owner
`.trim(), watermark, 'Beli Xp', '.belixp', 'Scan all Payment', '.scanall', 'OWNER', '.owner', m)
handler.help = ['belipremium']
handler.tags = ['info']
handler.command = /^beli(prem|premium)$/i

module.exports = handler