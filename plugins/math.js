 alpha.math = alpha.math ? alpha.math : {}
  if (args.length < 1) throw `
┌─「 Mode 」
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh: ${prefix}math easy
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
┌─「 Mode 」
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh: ${prefixrefix}math easy
`.trim()
  let id = m.chat
  if (id in alpha.math) return alpha.reply(m.chat, 'belum dijawab!', alpha.math[id][0])
  let math = genMath(mode)
  alpha.math[id] = [
    await alpha.reply(m.chat, `  *[ Math ]*
  
Jawablah Soal Berikut Ini:
${math.str}

Waktu: ${(math.time / 1000).toFixed(2)} detik
Hadiah: ${math.bonus} XP`, m),
    math, 4,
    setTimeout(async () => {
      if (alpha.math[id]) await alpha.sendMessage(m.chat, { text: `waktu habis!\njawabannya *${math.result}*`}, alpha.math[id][0])
      delete alpha.math[id]
    }, math.time)
  ]
let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 350],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 500],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 750],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 5000],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 40000, 100000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 1000000],
  superimpossible: [-999999999999999999, 999999999999999999, -999999, 999999, '+-*/', 30000, 5000000],
superimpossible2: [-999999999999999999999, 999999999999999999999, -99999999999999, 99999999999999, '/', 25000, 10000000],
supersupersuperimpossible: [-9999999999999999999999999999999999999999999999999999999, 9999999999999999999999999999999999999999999999999999999, -9999999999999999999999999999999999999999999999999999999, 9999999999999999999999999999999999999999999999999999999, '/', 5000, 1000000000000000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}