const axios = require('axios')
let handler = async (m, { conn, text }) => {
if (!text) throw `Masukkan Nama`
let json = await axios.get(`https://api.agify.io/?name=${text}`)
conn.reply(m.chat, `Nama : ${json.data.name}\n*Mati Pada Umur :* ${json.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`, m)
}
handler.tags = ['fun']
handler.help = ['cekmati <nama>']
handler.command = /^cekmati$/i

module.exports = handler