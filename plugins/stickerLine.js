let fetch = require('node-fetch')
let { Presence } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Harap masukkan URL yang ingin di konversi!\n\nContoh: ${usedPrefix + command} https://store.line.me/stickershop/product/8149770`
    if (!args[0].match(/(https:\/\/store.line.me\/stickershop\/product\/.*)/gi)) throw `url salah`
 
  let res = await fetch(`https://api.lolhuman.xyz/api/linestick?apikey=patricksus&url=${args[0]}`)
  let json = await res.json()
  if (json.result) {
for (let i of json.result.sticker) {
m.reply(`
Name: ${json.result.name}
Title: ${json.rssult.title}`)
await conn.sendFile(m.chat, await sticker(false, i, packname, author), ':v', '', m)
}
} else json
}
handler.help = ['stikerline <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kerline)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))