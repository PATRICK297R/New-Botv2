let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=patricksus')
let json = await res.json()
if (json.status !== 200) throw eror
let str = `
*Title:* 
${json.result.title}
*Desc:*
${json.result.desc}
*Story:* 
${json.result.story}
`.trim()
conn.sendFile(m.chat, json.result.thumbnail, '', str, m)
}
handler.tags = ['quotes']
handler.help = ['ceritahoror']
handler.command = /^ceritahoror$/i

module.exports = handler