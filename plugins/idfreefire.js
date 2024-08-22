let fetch = require('node-fetch')
let handler = async (m, { text }) => {
if (!text) throw `Masukkan Id Free Fire kamu!`
  let res = await fetch(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=patricksus`)
  let json = await res.json()
if (json.status !== 200) throw `User Tidak Ditemukan`
let str = `


Id: ${text}
Name: ${json.result}


`.trim()
m.reply(str)
}
handler.help = ['epep'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^(freefire|epep)$/i

module.exports = handler