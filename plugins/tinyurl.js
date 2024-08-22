let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Link', m)

  await m.reply(wait)
	axios.get(`https://hardianto.xyz/api/short/tinyurl?url=${text}&apikey=hardianto`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tinyurl','short'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler