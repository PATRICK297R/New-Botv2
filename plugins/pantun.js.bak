let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, text }) => {
let [tanggal, bulan ,tahun] = text.split `|`
if (!tanggal) throw `Example: .tanggaljadian 20|12|2020`
if (!bulan) throw `Example: .tanggaljadian 20|12|2020`
if (!tahun) throw `Example: .tanggaljadian 20|12|2020`
let res = await fetch(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=patricksus`)
let json = await res.json()
if (json.status !== 200) throw eror
let str = `
*Karakteristik:*
${json.result.karakteristik}
*Deskripsi:* 
${json.result.deskripsi}
`.trim()
m.reply(str)
}
handler.tags = ['fun']
handler.help = ['tanggaljadian']
handler.command = /^tanggaljadian$/i

module.exports = handler