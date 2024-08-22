const fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord hanya rindu', m)
    await m.reply(global.wait)
    let res = await fetch(`https://api.lolhuman.xyz/api/chord?apikey=patricksus&query=${text}`)
    let json = await res.json()
    if (json.status !== 200) throw eror
          let hasil = `*• Judul:* ${json.result.title}\n*• Created:* ${json.result.created}\n\n*• Chord:* ${json.result.chord}`
            conn.reply(m.chat, hasil, m)
}
handler.help = ['chord <judul lagu>']
handler.tags = ['edukasi']
handler.command = /^(chord)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
