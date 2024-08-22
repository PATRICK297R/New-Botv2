let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let [id, zoneid] = text.split `|`
if (!id) throw `Masukkan Id, Contoh: .ml 84830127|2169`
if (!zoneid) throw `Masukkan Zone Id, Contoh: .ml 84830127|2169`
let res = await fetch(`https://api.lolhuman.xyz/api/mobilelegend/${id}/${zoneid}?apikey=patricksus`)
let json = await res.json()
if (json.status !== 200) throw `User Tidak Ditemukan`
let str = `
Id: ${id}
Zone Id: ${zoneid}

Name: ${json.result}
`.trim()
m.reply(str)
}
handler.help = ['mlstalk', 'ml'].map(v => v + ' <id ml|zone id>')
handler.tags = ['internet']
handler.command = /^(mlstalk|ml)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler