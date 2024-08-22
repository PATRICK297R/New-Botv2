let handler = async (m, { usedPrefix, command }) => {
let wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let wita = require('moment-timezone').tz('Asia/Makassar').format('HH:mm:ss')
let wit = require('moment-timezone').tz('Asia/Jayapura').format('HH:mm:ss')
let runnya = `
*───「 JAM 」───*

WIB: ${wib}
WITA: ${wita}
WIT: ${wit}
`
m.reply(runnya)
}
handler.help = ['jam']
handler.tags = ['info']
handler.command = /^(jam)$/i

module.exports = handler
