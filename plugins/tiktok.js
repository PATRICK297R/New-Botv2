// RECODE ALYAAXZY

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSeSCAN1W/`
    m.reply(wait)
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=patricksus&url=${text}`)
    let json = await res.json()
    if (json.status !== 200) return conn.sendButton(m.chat, 'Terjadi Kesalahan Silahkan Mencoba Tiktok2', watermark, 'Tiktok2', `.tiktok2 ${text}`, m)
let str = `
*-By:* ${json.result.author.nickname} (${json.result.author.username})
*-Caption:* 
${json.result.title}
*-Duration:* ${json.result.duration}
`.trim()
    await conn.sendFile(m.chat, json.result.link, 'error.mp4', str,  m)
}
handler.command = /^(tt|ttdl|tiktok|tiktokdl)$/i
handler.tags = ['downloader']
handler.help = ['tiktok']
handler.limit = true
module.exports = handler