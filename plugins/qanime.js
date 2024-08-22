let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/quotesnime?apikey=patricksus')
let json = await res.json()
if (json.status !== 200) throw eror
let str = `
${json.result.quote}
`.trim()
let wtrm = `
Character: ${json.result.character}
Anime: ${json.result.anime}
Episode: ${json.result.episode}
`.trim()
conn.sendButton(m.chat, str, wtrm, 'Quotes Anime', '.qanime', m)
}
handler.tags = ['quotes']
handler.help = ['quotesanime', 'qanime']
handler.command = /^(qanime|quotesanime)$/i

module.exports = handler