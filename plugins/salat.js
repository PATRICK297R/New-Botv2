const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`contoh:\n${usedPrefix + command} jakarta`)
    let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=ed6c4f2c72b6f92f7d201464`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) {
        if (json.result == 'eror') throw 'Masukkan Nama Kota Yang benar'
 }
    m.reply(`*Jadwal Sholat ${text}*\n\n
   Tanggal: ${json.result.tanggal}
   Sahur: ${json.result.sahur}
   Imsak: ${json.result.imsak}
   Subuh: ${json.result.subuh}
   Terbit: ${json.result.terbit}
   Dhuha: ${json.result.dhuha}
   Dzuhur: ${json.result.dzuhur}
   Ashar ${json.result.ashar}
   Maghrib:  ${json.result.maghrib}
   Isya: ${json.result.isya}`.trim())

}
handler.help = ['salat <daerah>']
handler.tags = ['islam', 'quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler
