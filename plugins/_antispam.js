        if (!m.message) return
        alpha.spam = alpha.spam ? alpha.spam : {}
        if (m.sender in alpha.spam) {
            alpha.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - alpha.spam[m.sender].lastspam > 10) {
                if (alpha.spam[m.sender].count > 10) {
                    global.db.data.users[m.sender].banned = true
                    m.reply('*Kamu Dibanned Karena Spam!!!*')
                }
                alpha.spam[m.sender].count = 0
                alpha.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else alpha.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }