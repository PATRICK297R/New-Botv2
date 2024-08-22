let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
  let who = m.sender
    let user = global.db.data.users[who]
  let pp = await(await fetch('https://telegra.ph/file/d4b916a1e698d2b951a0e.png')).buffer()
  let kai = await(await fetch('https://telegra.ph/file/1c89d13bd2fdf6c6d06dc.jpg')).buffer()
  try {
    pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
  } catch (e) {
  } finally {
      let text = `@${who.split`@`[0]}` .trim()
      await conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
        mentionedJid: [who],
        externalAdReply: {
          mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: user.name,
          body: 'R-Txzy',
          thumbnail: pp
        }
      }})
    }
  }

handler.help = ['tagme']
handler.tags = ['info']

handler.command = /^tagme$/i

module.exports = handler
