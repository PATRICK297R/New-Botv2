const uploadImage = require("../lib/uploadImage");
const fetch = require("node-fetch");

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `ini tu gunanya buat ngambil teks yang ada digambar, kirim/balas gambar dengan perintah ${usedPrefix + command}`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung!`;
  let img = await q.download();
  let url = await uploadImage(img);
  let res = await fetch(`https://api.lolhuman.xyz/api/ocr?apikey=patricksus&img=${url}`)
let json = await res.json()
if (json.status !== 200) throw eror
m.reply(`${json.result}`)
}
handler.help = ["ocr"];
handler.tags = ["convert"];
handler.command = /^ocr$/i;

handler.limit = true;

module.exports = handler;