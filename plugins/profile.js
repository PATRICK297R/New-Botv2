let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
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
        dailyReward: 0,
        joincount: 0,
        role: 'Hyaktaku V',
        autolevelup: false,
        pc: 0,
        premium: false,
        premiumTime: 0,
      }
    }
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned, premium, premiumTime, joincount, dailyReward } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
*Nama* : ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${about != 401 ? '\n*Info* : ' + about : ''}
*Nomor* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link* : https://wa.me/${who.split`@`[0]}
*XP* : TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*Level* : ${level}
*Role* : ${role}
*Limit* : ${premium ? `Unlimited (${limit})` : `${limit}`}
*DailyReward* : ${dailyReward}/50
*JoinCount* : ${joincount}/3
*Daftar* : ${registered ? 'YES' : 'NO'}
*Premium* : ${premium ? `YES\n*Premium Expired* : ${conn.msToDate(premiumTime - new Date() * 1)}` : 'NO'}
*Banned* : ${banned ? 'YES' : 'NO'}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid } })
  }
}
handler.help = ['profile [@62XXXX]']
handler.tags = ['tools']
handler.command = /^profile?$/i
module.exports = handler
