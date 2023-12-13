import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./thumbnail.jpg')
await conn.reply(m.chat, `ᴋᴀᴍᴜ ʙɪsᴀ ᴅᴏɴᴀsɪ ᴅɪ ɴᴏᴍᴏʀ ᴅɪʙᴀᴡᴀʜ ɪɴɪ
ᴀᴛᴀᴜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʟɪɴᴋ sᴀᴡᴇʀɪᴀ

┌ ◦ *ɪᴍ3* : 085784902529
│ ◦ *sᴍᴀʀᴛғʀᴇɴ* : 0881026695897
│ ◦ *ᴅᴀɴᴀ* : 085784902529
│ ◦ *ᴅᴀɴᴀ2* : 0881026695897
│ ◦ *ɢᴏᴘᴀʏ* : 085784902529
└ ◦ *sᴀᴡᴇʀɪᴀ* : https://s.id/1Ywjb
`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `ᴅᴏɴᴀsɪ ʙʏ ᴀɴᴅʏ`, orderTitle: 'ᴀɴᴅʏ', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler