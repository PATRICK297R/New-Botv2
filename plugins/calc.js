let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Kamu Ketahuan curang, game math di chat ini akan di hapus')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`${result}`)
  } catch (e) {
    if (e == undefined) throw 'Contoh: #calc 50+60'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5

module.exports = handler