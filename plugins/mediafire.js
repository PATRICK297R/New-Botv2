let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `linknya mana??\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`
    let res = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=patricksus&url=${text}`)
    let json = await res.json()
    if (json.status !== 200) throw eror
    let img = 'https://telegra.ph/file/2319d61d1d389efd97d36.jpg'
let str = `
   *[ MEDIAFIRE DOWNLOADER ]*
Tittle: ${json.result.filename}
Size: ${json.result.filesize}
Jenis File: ${json.result.filetype}
Uploaded: ${json.result.uploaded}

Harap Tunggu File sedang dikirim....
`.trim()
    await m.reply(wait)
    conn.sendFile(m.chat, await (await fetch(img)).buffer(), 'Tes.jpg', str, m)
    await time(3000)
    await conn.sendFile(m.chat, json.result.link, json.result.filename, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

module.exports = handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}