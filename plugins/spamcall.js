let fetch = require('node-fetch')
let handler = async (m, { conn, text, prefix }) => {
  if (!text) throw `Contoh Penggunaan\n${prefix}spamcall 8xxxxxxxx`
  let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${prefix}spamcall 8xxxxxxxx`
  m.reply('_*Tunggu permintaan anda sedang diproses.....*_')
  let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
  let spcall = `*Nomor bot* : _${anu.phone_prefix}_\n\n_Bot berhasil menlpon anda!_`
  reply(`${spcall}`)
  m.reply(anu)
}
// by Aine
handler.help = ['spamcall <nomor>']
handler.tags = ['tools']
handler.command = /^(spamcall)$/i
handler.limit = true
handler.owner = true
module.exports = handler
