let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (user.dailyReward < 50){
        await conn.reply(m.chat, `Daily Reward kamu belum mencukupi untuk mendapatkan hadiah Daily Reward!\nDaily Reward mu: ${user.dailyReward}/50. Dibutuhkan 50 Daily Reward untuk mendapatkan hadiah.\nCara memperoleh Daily Reward: bermain semua game di R-Txyz kecuali Family100, Tictactoe, Slot, Suit, dan Math.\n\nPoint Daily Reward akan di riset setiap jam 4 pagi
`.trim(), m)
    }
    if (user.dailyReward === 50) {
        await conn.reply(m.chat, `Terimakasih sudah menyelesaikan daily reward. Berikut hadiah mu:

5000000 EXP

Daily Reward akan di riset setiap jam 4 pagi setiap hari WIB.`.trim(), m)
    user.dailyReward = 0
    user.exp += 5000000
    }
    if (user.dailyReward > 50) {
        await conn.reply(m.chat, `Terimakasih sudah menyelesaikan daily reward. Berikut hadiah mu:
        
+5000000 EXP

Daily Reward akan di riset setiap jam 4 pagi setiap hari WIB.`.trim(), m)
    user.dailyReward = 0
    user.exp += 5000000
    }
}
handler.command = /^(dailyreward|dr)$/i
handler.tags = ['game']
handler.help = ['dailyreward']
module.exports = handler
