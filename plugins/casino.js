let buatall = 1
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
    else conn.casino[m.chat] = true
        let randomaku = `${Math.floor(Math.random() * 100)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'casino <jumlah>\n ' + usedPrefix + 'casino 1000', m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            //await m.reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `💰 CASINO 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*KAMU KALAH*\nKamu kehilangan ${count} Uang(xp)`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].exp += count * 2
                conn.reply(m.chat, `💰 CASINO 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*KAMU MENANG*\nKamu mendapatkan ${count * 2} Uang(xp)`.trim(), m)
            } else {
                global.db.data.users[m.sender].exp += count * 1
                conn.reply(m.chat, `💰 CASINO 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*KITA SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`.trim(), m)
            }
        } else conn.reply(m.chat, `Uang(xp) kamu tidak mencukupi untuk Casino silahkan main game untuk menambah exp terlebih dahulu!`.trim(), m)
}
handler.help = ['casino <jumlah>']
handler.tags = ['game']
handler.command = /^(casino)$/i

handler.fail = null

handler.limit = 1

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}