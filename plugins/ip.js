let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Example: .ip 114.142.169.38`
let res = await fetch(`https://api.lolhuman.xyz/api/ipaddress/${text}?apikey=patricksus`)
let json = await res.json()
if (json.status !== 200) throw eror
let str = `
*Query:* ${json.result.query}

*Country:* ${json.result.country}
*Country Code:* ${json.result.countryCode}
*Region:* ${json.result.region}
*Region Name:* ${json.result.regionName}
*City:* ${json.result.city}
*Zip:* ${json.result.zip}
*Lat:* ${json.result.lat}
*Lon:* ${json.result.lon}
*Time Zone:* ${json.result.timezone}
*Isp:* ${json.result.isp}
*Org:* ${json.result.org}
*As:* ${json.result.as}
`.trim()
m.reply(str)
}
handler.tags = ['tools']
handler.help = ['ip']
handler.command = /^ip$/i

module.exports = handler