const uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let { registered } = global.db.data.users[who]
let name = registered ? global.db.data.users[who].name : conn.getName(who)
    let caption = `
Limit: *${user.premium ? `Unlimited (${user.limit})` : `${user.limit}`}*
EXP: *${user.exp}*
DailyReward: *${user.dailyReward}/50*
Level: *${user.level}*
Role: *${user.role}*
`.trim()
    let pp = await(await fetch('https://telegra.ph/file/d4b916a1e698d2b951a0e.png')).buffer()
    try {
      pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
    } catch (e) {
    } finally {
      await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
          mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: name,
          body: 'R-Txzy',
          thumbnail: pp
        }
    }})
  }
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler