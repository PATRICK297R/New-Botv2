let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let fail = `perintah ini buat ngasih XP ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6285157336614 10\natau balas pesan doi dengan perintah: ${usedPrefix + command} 10`
  let me = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
    throw false
  }
  if (typeof global.db.data.users[who] == "undefined") {
    global.db.data.users[who] = {
      exp: 0,
      limit: 10,
      lastclaim: 0,
      registered: false,
      name: conn.getName(m.sender),
      age: -1,
      regTime: -1,
      afk: -1,
      afkReason: '',
      banned: false,
      level: 0,
      call: 0,
      role: 'Warrior V',
      autolevelup: false,
      pc: 0,
    }
  }
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
    throw false
  }
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'minimal 1'
  let users = global.db.data.users
  let gagal = `
 *[ TRANSFER EXP ]*

*FROM* : @${me.replace(/@.+/, '')}
*TO* : @${who.replace(/@.+/, '')}
*JUMLAH* : ${xp}
*PAJAK* : 2%
*TOTAL* : ${exp}

*STATUS* : GAGAL ❌
*Alasan* : Karena Exp tidak Mencukupi, ada pajaknya juga
`.trim()
  if (exp > users[m.sender].exp) return conn.fakeReply(m.chat, gagal, '0@s.whatsapp.net', `GAGAL`, 'status@broadcast')
  users[m.sender].exp -= exp
  users[who].exp += xp
  let str = `
 *[ TRANSFER EXP ]*

*FROM* : @${me.replace(/@.+/, '')}
*TO* : @${who.replace(/@.+/, '')}
*JUMLAH* : ${xp}
*PAJAK* : 2%
*TOTAL* : ${exp}

*STATUS* : BERHASIL ✅
`.trim()
  conn.fakeReply(m.chat, str, '0@s.whatsapp.net', `BERHASIL`, 'status@broadcast')
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <jumlah>']
handler.tags = ['xp']
handler.command = /^pay$/

module.exports = handler