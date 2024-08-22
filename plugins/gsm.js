let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Example : .gsmarena samsung`
let res = await fetch(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=fa2d6a8c2f3b`)
let json = await res.json()
let capt = `⭔ Title: ${json.result.judul}
⭔ Realease: ${json.result.rilis}
⭔ Size: ${json.result.ukuran}
⭔ Type: ${json.result.type}
⭔ Storage: ${json.result.storage}
⭔ Display: ${json.result.display}
⭔ Inchi: ${json.result.inchi}
⭔ Pixel: ${json.result.pixel}
⭔ Video Pixel: ${json.result.videoPixel}
⭔ Ram: ${json.result.ram}
⭔ Chipset: ${json.result.chipset}
⭔ Battery: ${json.result.batrai}
⭔ Battery Brand: ${json.result.merek_batre}
⭔ Detail: ${json.result.detail}
`.trim()
conn.reply(m.chat, capt, m)
}
handler.tags = ['internet']
handler.help = ['gsmarena <merek>']
handler.command = /^(gsm|gsmarena)$/i

module.exports = handler