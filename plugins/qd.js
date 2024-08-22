let fetch = require('node-fetch')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn }) => {
m.reply(wait)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Balas Gambar Dengan perintah .qrread`
if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak di dukung*_`
let img = await q.download()
let url = await uploadImage(img)
let res = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=patricksus&img=${url}`)
 let json = await res.json()
if (json.status !== 200) throw eror
conn.reply(m.chat, json.result, m)
}
handler.tags = ['tools']
handler.help = ['qrread', 'qrreader']
handler.command = /^(qrreader|qrread)$/i

module.exports = handler