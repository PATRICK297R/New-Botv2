let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.DATABASE.data.users)
	if(!args || !args[0]) {
		var lim = 0
	} else {
		var lim = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.level = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
}
handler.help = ['level'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetlevel)$/i

handler.owner = true

module.exports = handler