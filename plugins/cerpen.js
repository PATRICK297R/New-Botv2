let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let anu = await fetch('https://api.lolhuman.xyz/api/cerpen?apikey=patricksus')
let json = await anu.json()
let str = `
*Judul:* ${json.result.title}
*Creator:* ${json.result.creator}

${json.result.cerpen}
`.trim()
m.reply(str)
}
handler.tags = ['quotes']
handler.help = ['cerpen']
handler.command = /^cerpen$/i

module.exports = handler