let handler = async (m, { conn, usedPrefix }) => {
let caption = `
XP
1.000.000 XP = 2K
100.000.000 XP = 3K
1.000.000.000 = 5K

LIMIT 
100 LIMIT = 2K
1000 LIMIT = 5K

KARENA TIDAK ADA PEMBAYARAN PULSA DIBAWAH 5K MAKA HANYA BISA PEMBAYARAN VIA QRIS
`.trim()
await conn.sendButton(m.chat, caption, watermark, 'Scan All Payment', '.scanall', m)
}

handler.tags = ['info']
handler.help = ['belixp', 'belilimit']
handler.command = /^(belixp|belilimit)$/i

module.exports = handler