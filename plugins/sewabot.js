let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 10000*
╠➥ *Permanen* : *Rp 15000*
╠➥ *Premium* :   *Rp 5000*
╠➥ *Sc Bot* :        *Masih Beta*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Qris, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Script original by Nurutomo
╠═〘 R-TXZY〙 ═`.trim(), '© R-Txzy', 'Owner', '.owner', 'Pulsa Im3', '#viapulsa', 'Scan All Payment', '.scanall', m)
}

handler.tags = ['info']
handler.help = ['sewabot']
handler.command = /^sewa(bot)$/i

module.exports = handler