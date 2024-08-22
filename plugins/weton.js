let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let [tanggal, bulan, tahun] = text.split `|`
if (!tanggal) throw `Example .weton 1|11|2011`
if (!bulan) throw `Example .weton 1|11|2011`
if (!tahun) throw `Example .weton 1|11|2011`
let res = await fetch(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=patricksus`)
let json = await res.json()
if (json.status !==200) throw eror
let str = `
*Weton:* 
${json.result.weton}
*Karakter:* 
${json.result.karakter}
*Pekerjaan:* 
${json.result.pekerjaan}
*Rejeki:* 
${json.result.rejeki}
*Jodoh:* 
${json.result.jodoh}
`.trim()
m.reply(str)
}
handler.tags = ['tools']
handler.help = ['weton <tanggal|bulan|tahun>']
handler.command = /^weton$/i

module.exports = handler