let handler = async (m, { conn, usedPrefix, command }) => {

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
m.reply(`Bot Online!
Runtime: ${uptime}
Baterai: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '⚡ pengisian' : ''}` : 'tidak diketahui'}
Speed: ${speed.toFixed(4)} detik`)
}
handler.help = ['test']
handler.tags = ['info']
handler.command = /^(tes|test)$/i
module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}