//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Donasi')).buffer(), `
┌〔 Donasi • Pulsa IM3/DANA〕
├ Pulsa: 085735980188
├ Pulsa: 085815212637
├ Qris: Klik Button "Scan All Payment"
└────
Jangan Lupa Kirim Bukti Pembayaran Ke Owner
`.trim(), watermark, 'Beli Premium', '.beliprem', 'Owner', '.owner', 'Scan All Payment', '.scanall', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler