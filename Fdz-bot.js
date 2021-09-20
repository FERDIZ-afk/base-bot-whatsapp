// 
/*
CREATOR BOT WHATSAPP

*/
//
const
	{
    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		MimetypeMap,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		ChatModification,
		processTime,
	} = require("@adiwajshing/baileys")

const dl = require('./lib/scraper.js')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const simple  = require('./lib/simple.js');
const WAConnection = simple.WAConnection(_WAConnection);
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const util = require('util')
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require('yt-search')
const crypto = require('crypto')
//const ms = require('parse-ms')
const ms = import('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

const { error } = require("qrcode-terminal")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//setting\\
banChats = true// jangan diubah
prefix = setting.prefix // edit di setting.json
targetpc = setting.ownerNumber // edit di setting.json
owner = setting.ownerNumber // edit di setting.json
thumb = setting.thumb // edit di setting.json

fake = setting.fake // edit di setting.json
img = setting.img // edit di setting.json
botname = setting.botname // edit di setting.json
ownername = setting.ownername // edit di setting.json

cr = setting.cr // edit di setting.json
hit_today = [] // jangan diubah
blocked = [] // jangan diubah


ownerr = '6287877173955' // jangan diubah
numbernye = '0' // jangan diubah




baterai = {
battery: "" || "Not detect",
isCharge: "" || false
}

//=================================================//
		module.exports = fdz = async (fdz, mek) => {
		  
		try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == "status@broadcast") return;
		m = simple.smsg(fdz, mek);  
		global.blocked
		
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const type = Object.keys(mek.message)[0];1;
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[$.\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[$.?/\\©^z+*,;]/gi) : '.'
    body = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'listResponseMessage') && mek.message.listResponseMessage.selectedDisplayText ? mek.message.listResponseMessage.selectedDisplayText : (type == 'listMessage') && mek.message.listMessage.description ? mek.message.listMessage.description : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'listResponseMessage') && mek.message.listResponseMessage.title ? mek.message.listResponseMessage.title : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'buttonsMessage') && mek.message.buttonsMessage.contentText ? mek.message.buttonsMessage.contentText : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
    const q = args.join(" ");
		const botNumber = fdz.user.jid
		const botNumberss = fdz.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		
		const sender = mek.key.fromMe ? botNumber : isGroup ? mek.participant : mek.key.remoteJid
		 let senderr = mek.key.fromMe
      ? fdz.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		
		const senderNumber = sender.split("@")[0]
		const totalchat = await fdz.chats.all()
		const groupMetadata = isGroup ? await fdz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false

   const istMe = botNumber
   const isUser = user.includes(sender)
   const isOwner = senderNumber == owner || senderNumber == botNumber //|| mods.includes(se
   fdz.on("CB:action,,battery", json => {

	 const battery = json[2][0][1].value

	 const persenbat = parseInt(battery)
	 baterai.battery = `${persenbat}%`
	 baterai.isCharge = json[2][0][1].live
	 })



    //FUNCTION DATE
var ucapan = ''
 if (jam >= '04:00' && jam <= '06:00') {
 ucapanW = 'Subuh!'
 } else if (jam >= '06:00' && jam <= '10:00') {
 ucapanW = 'Pagi!'
 } else if (jam >= '10:00' && jam <= '14:00') {
 ucapanW = 'Siang!'
 } else if (jam >= '14:00' && jam <= '17:00') {
 ucapanW = 'Sorre!'
 } else if (jam >= '17:00' && jam <= '17:30') {
 ucapanW = 'Petang!'
 } else if (jam >= '17:30' && jam <= '18:10') {
 ucapanW = 'Magrib!'
 } else if (jam >= '18:10' && jam <= '04:00') {
 ucapanW = 'Malam!'
 } else {
 ucapanW = 'Malam!'
 }
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}
const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
function kyun(seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s
}
var hours = Math.floor(seconds / (60 * 60))
var minutes = Math.floor(seconds % (60 * 60) / 60)
var seconds = Math.floor(seconds % 60)
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
//END FJNCTION DATE

   
   /*
BY FRM untuk @⁨Ivanzz`⁩ @⁨FERDIz-AFK⁩ 
*/

		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? fdz.user.jid : fdz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? fdz.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	             const dinane = `${thisDay} - ${day} - ${myMonths[bulan]} - ${year}`
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
	            	
		mess = {
			wait: 'Sedang di proses「 ⏳ 」',
			success: 'Berhasil 「 ✅ 」',
			wrongFormat: 'Gagal 「 ❎ 」',
			error: {
				stick: 'Format Error「 ❗ 」',
				Iv: 'Link Error「 ❗ 」'
			},
			only: {
				group: '```ONLY GROUP```',
			}
		}
		
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            fdz.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            fdz.sendMessage(hehe, teks, text)
        }
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? fdz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : fdz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            fdz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            fdz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            fdz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":1,"isForwarded":true},sendEphemeral: true
            })
        }

    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/200291700917_293357.jpg`), //Gambarnye
            },
            title: "TOKO ONLINE WAIFU", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "IDR",
            priceAmount1000: "2.000.000.000.000",
            retailerId: "FERDIZ-AFK",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };

        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 666,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `‣  ${setting.botname}\n‣    ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `${pushname}`,
          jpegThumbnail: fs.readFileSync(`image/${thumb}`)
        },
      },
    };



const fvideo  = (teks) => {
            fdz.sendMessage(from, teks, text, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { 
                 "videoMessage": { 
                 "title":"ONE DEV",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': `${hahh} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
                        }}}})}
			
			
const fakeitem = (teks) => {
  fdz.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":666,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
const fakedoc = (teks) => {  
  fdz.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "fdz", "fileLength": "36", "pageCount": 0, "fileName": `fdzbot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  
const fdzuhuy = (pesan, tipe, target, target2) => {
	fdz.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}



const sendButText = (id, text, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
text: text,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "TEXT"
}
fdz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}


    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      fdz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await fdz.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      fdz.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await fdz.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      fdz.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };




if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`「 ANTI LINK TERDETEKSI 」\n\nKamu mengirimkan link di grup chat [ ! ] \nMaaf kamu di kick dari grup >_<`)
setTimeout(() => {
fdz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

// 𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎
if (budy.length > 800) {
if (!isGroup) return
if (isGroupAdmins) return
var kice = `${sender.split("@")[0]}@s.whatsapp.net`
reply('TANDAI TELAH DIBACA\n'.repeat(420))
reply(`「 ANTI VIRUS TERDETEKSI 」\n\nKamu mengirimkan virus di grup chat [ ! ] \nMaaf kamu di kick dari grup >_<`)
setTimeout(() => {
fdz.groupRemove(from, [kice]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

//FUNCTION
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        fdz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    fdz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return fdz.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return fdz.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumb}`)})
        }
        
//FUNCTION
           //FUNCTION

    function clockString(ms) {

      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await fdz.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

    let ii = []
		let giid = []
		for (mem of totalchat){
			ii.push(mem.jid)
		}
				for (id of ii){
		if (id && id.includes('g.us')){
		giid.push(id)
		}
		}
    const  timestampi = speed();
		const  latensii = speed() - timestampi
		const latensiii = `${latensii.toFixed(4)} _Second_`
		const ini_gcchat = `${giid.length}`
		const ini_totalchat = `${totalchat.length - giid.lenght}`

    const replyy = (teks) => {
			fdz.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
		
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    

    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 'message', color(command), 'nomor', color(sender.split('@')[0]), 'Dari grup', color(groupName), 'args :', color(args.length))
   
		if (!mek.key.fromMe && banChats === true) return

    switch (command) {

    case prefix+ 'status':
  	fakeitem(`*STATUS*\n> PREFIX : *${prefix}* \n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
    break
  
		case prefix+ 'mode':
    if (!isOwner && !istMe) return await reply('Maap ni, gw gk kenal lu')
        sendButMessage(from, `MODE SELF/PUBLIC\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: "RESPONSE",
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: "RESPONSE",
          },
          {
            buttonId: `${prefix}info`,
            buttonText: {
              displayText: `INFO BOT`,
            },
            type: "RESPONSE",
          },
        ]);
        break


      case prefix+'q':
        if (!m.quoted) return reply("reply message!");
        let qse = fdz.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break
        
//MENU KU
case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            reply (`bentar kak ${pushname}`)
		            const tod = await fetchJson(`https://fdz-app.herokuapp.com/api/stalkig?username=${q}`);
		            console.log(`${args.join(' ')}`)
		            ten = `${tod.picurl}`
		            teks = `INSTAGRAM STALKING
DATA BERHASIL DIDAPATKAN\n\n
▷ Link : https://instagram.com/${args.join('')}
▷ Username :  ${tod.username}
▷ Full Name : ${tod.fullname}
▷ Followers : ${tod.followers}
▷ Following : ${tod.following}
▷ Private : ${tod.private_user}
▷ Verified : ${tod.verified_user}
▷ total post : ${tod.post}
▷ Prof account : ${tod.professional_account}
▷ kategori account : ${tod.category_name}
▷ Bio : \n ${tod.bio}
▷ External link : \n${tod.external_url}`
		            sendMediaURL(from,ten,teks)
		            break



//maker
                case prefix+ 'tulis':
              if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomo&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
              var bodi = args.join(" ")
              var nama = bodi.split("&")[0];
              var kelas = bodi.split("&")[1];
              var no = bodi.split("&")[2];
              var aksarane = bodi.split("&")[3];
              reply('membuat bos...')
                 rakz = await getBuffer(`https://fdz-app.herokuapp.com/api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 fdz.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });
                 break;

                   case prefix+ 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    try{
                    bikin = (`https://ferdiz-afk.my.id/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                    console.log(bikin)
                    imge = await getBuffer(bikin)
                    await fdz.sendMessage(from, imge, image, { quoted: mek });
                    } catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim ngak bisa, cek url gambar nya bang :)')
					}
                    break;



case prefix+ 'del':
  try{
              fdz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
  } catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim ngak bisa, dahlah :)')
					}
              break

// di dalam group
case prefix+ 'group-setting':
          let gcset = fdz.prepareMessageFromContent(from, {
					"listMessage": {
					"title":`HALLO ${pushname}`,
					"description": "Silahkan pilih menu bot dibawah. Ingat!!! No spam",
					"buttonText": "SELECT",
          "listType": "SINGLE_SELECT",
        	"sections": [{
        			"rows": [{
        					"title": `GROUP OPEN CHAT`,
        					"description": "HALLO KAK GRUP NYA AKAN DI BUKAN NIH",
        					"rowId": `${prefix}group-open`
        				},
        				{
        					"title": `GROUP CLOSE CHAT`,
        					"description": "MAAF GRUP INI AKAN DI TUTUP",
        					"rowId": `${prefix}group-close`
        				},
        				{
        					"title": "PESAN SEMENTARA ON",
        					"description": "PESAN SEMENTARA ON KAK",
        					"rowId": `${prefix}psgc-on`
        				},
        				{
        					"title": "PESAN SEMENTARA OFF",
        					"description": "PESAN SEMENTARA OFF KAK",
        					"rowId": `${prefix}psgc-off`
        				},
        				{
        					"title": "RESET LINKGC",
        					"description": "Link group akan di reset kak",
        					"rowId": `${prefix}resetgclink`
        				},
        				{
        					"title": "LINKGC",
        					"description": "Link group",
        					"rowId": `${prefix}gclink`
        				},
        				{
        					"title": `[💸] DONASI` ,
        					"description": "Saya Ingin berdonasi kak \nuntuk support Bot",
        					"rowId": `${prefix}tf`
        				}]
        		}],
        		"footerText": `\nJam : ${tampilWaktu} ${ampm}\nHari-tanggal : ${dinane}\nPasaran jawa : ${weton}\n\n*© FERDI Z-AFK*`
            }}, {quoted: fgclink})
          fdz.relayWAMessage(gcset, {waitForAck: true})
          break


case prefix+'group-open':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
  try {
      setTimeout( () => {
		fdz.groupSettingChange(from, GroupSettingChange.messageSend, false)
  }, 1000)
      		setTimeout( () => {
					fdz.sendMessage(from, `*「 SUKSES MEMBUKA GRUP 」*`, MessageType.text)
		}, 3000)
  } catch {
  		fakegroup('```maaf bos ngak bisa```')
  }
  break

case prefix+'group-close':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
  try {
      setTimeout( () => {
				 fdz.groupSettingChange(from, GroupSettingChange.messageSend, true)
  }, 1000)
      		setTimeout( () => {
			fdz.sendMessage(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text)
		}, 3000)
  } catch {
  		fakegroup('```maaf bos ngak bisa```')
  }
  break
  

case prefix+'add':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
					if (args.length < 1) return fakestatus('Yang mau di add siapa? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					fdz.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim yang mau di add di private, dahlah :)')
					}
					reply('「 ```SUKSES``` 」')
					break
case prefix+'kick':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
			    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG TARGET NYA')
				  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			     if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang !\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						fdz.groupRemove(from, mentioned)
				  } else {
						mentions(`「 🕹 」 User @${mentioned[0].split('@')[0]} \nGoodbye, don't come back 👋🏻`, mentioned, true)
						fdz.groupRemove(from, mentioned)
				  }
				  break
case prefix+ 'demote':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `「 D E M O T E 」\n\n「 🕹 」 User @_.split('@')[0]\n`
							teks += `Turun Jabatan Sebagai Member Group`
						}
						mentions(teks, mentioned, true)
						fdz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`「 D E M O T E 」\n\n「 🕹 」 User @${mentioned[0].split('@')[0]}\nTurun Jabatan Sebagai Member Group`, mentioned, true)
						fdz.groupDemoteAdmin(from, mentioned)
					}
					break

case prefix+ 'promote':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `「 P R O M O T E 」\n\n「 🕹 」 User @_.split('@')[0]\n`
							teks += `Naik Jabatan Sebagai Admin Group`
						}
						mentions(teks, mentioned, true)
						fdz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`「 P R O M O T E 」\n\n「 🕹 」 User @${mentioned[0].split('@')[0]}\nNaik Jabatan Sebagai Admin Group`, mentioned, true)
						fdz.groupMakeAdmin(from, mentioned)
					}
					break

case prefix+'listadmin':
					if (!isGroup) return fakestatus('```GROUP ONLY```')
					teks = `*DAFTAR ATASAN GROUP* \n_${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case prefix+'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await fdz.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             fdz.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
case prefix+ 'gclink':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
				linkgc = await fdz.groupInviteCode (from)
				yeh = `LINK GROUP \n\n*GROUP NAME* : \n*${groupName}*\nhttps://chat.whatsapp.com/${linkgc}`
				fdz.sendMessage(from, yeh, text, {quoted: mek})
				break
case prefix+ 'resetgclink':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Hanya untuk admin```')
    if (!isBotGroupAdmins) return fakestatus('```bot nya ngak jadi admin```')
				linkgc = await fdz.revokeInvite(from)
				yeh = `LINK GROUP BERHASIL DI RESET\n\n*GROUP NAME* : \n*${groupName}*`
				fdz.sendMessage(from, yeh, text, {quoted: mek})
				break

//pembuat bot
case prefix+'owner':
	members_ids = []
	for (let mem of groupMembers) {
	members_ids.push(mem.jid)
	}
	vcard2 = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ `FN:${setting.ownername}\n`
	+ `ORG: Creator ${setting.ownername} ;\n`
	+ `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
	+ 'END:VCARD'.trim()
	fdz.sendMessage(from, {displayName: `Creator ${setting.ownername}`, vcard: vcard2}, contact, 
	{ quoted: fkontak, 
	//contextInfo: {"mentionedJid": members_ids}
	})
	reply('TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA')
	break

case prefix+'creator':
let conarray = []
ownerContact = ['6287877173955','628812904283','0']
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
var vname = fdz.contacts[i] != undefined ? fdz.contacts[i].vname || fdz.contacts[i].notify : await fdz.getName(i)
conarray.push({
"displayName": '@FERDI Z-AFK',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${fdz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
"displayName": '@Ivanzz',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${fdz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
"displayName": 'Wa',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${fdz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await fdz.sendMessage(from, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage',{ quoted: fkontak})
break


//buat owner
case prefix+ 'setppbot':
  	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
    if (((isMedia && !mek.message.videoMessage) ||  isQuotedImage ||  isQuotedSticker) && args.length == 0 ) {
          try{
          enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await fdz.downloadAndSaveMediaMessage(enmediau)
					await fdz.updateProfilePicture(botNumber, mediau)
		            reply(`👍`)
          }catch (e) {
						reply('ERROR')
          }
    } else {
        reply(`Kirim gambar dengan caption ${prefix}setppbot`);
    }
		break
case prefix+'buatgrup':
               if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                for (let i = 0; i < mentioned.length; i++){
				anu = []
				anu.push(mentioned[i])
                }
				fdz.groupCreate(argza[0], anu)
				reply(`Sukes membuat grup:\n${argza}`)
                }
				break
case prefix+ 'join':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		try {
		if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		hen = args[0]
		if (!q) return fakestatus('Masukan link group')
		var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		var response = await fdz.acceptInvite(codeInvite)
		fakestatus('```SUKSES JOIN GRUP```')
		} catch {
		fakegroup('```LINK ERROR!```')
		}
		break


//up menu
case prefix+ 'upswteks':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (!q) return fakestatus('Isi teksnya!')
		fdz.sendMessage('status@broadcast', `${q}`, extendedText)
		fakeitem(`Sukses Up story wea teks ${q}`)
		break
case prefix+ 'upswimage':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedImage) {
		const swsw = isQuotedImage 
    ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
    .extendedTextMessage.contextInfo
    : mek;
    cihcih = await fdz.downloadMediaMessage(swsw);
    fdz.sendMessage("status@broadcast", cihcih, image, {caption: `${q}`,});
    bur = `Sukses Upload Story Image dengan Caption: ${q}`;
    fdz.sendMessage(from, bur, text, { quoted: mek });
    } else {
    fakegroup('```Reply gambarnya!```');
    }
		break
case prefix+ 'upswvideo':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedVideo) {
		const swsw = isQuotedVideo
    ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
    .extendedTextMessage.contextInfo
    : mek;
    cihcih = await fdz.downloadMediaMessage(swsw);
    fdz.sendMessage("status@broadcast", cihcih, video, {caption: `${q}`,});
    bur = `Sukses Upload Story Video dengan Caption: ${q}`;
    fdz.sendMessage(from, bur, text, { quoted: mek });
    } else {
       fakegroup('```Reply videonya!```');
    }
		break


		default:		
		
		if (budy.startsWith('.>')){
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
       try {
          function Res(res) {
          ev = JSON.stringify(res, null, 2)
          al = util.format(ev)
          if (ev == undefined){
          al = util.format(ev)
          }
          return reply(`${al}`)
          }
          reply(util.format(eval(`(async () => { ${q} })()`)))
       } catch(e) {
          emror = String(e)
          reply(`${emror}`)
        }}

    if (budy.startsWith('$')){
    if (!isOwner && !mek.key.fromMe && !istMe) return await reply('Maap ni, gw gk kenal lu')
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
    qur = budy.slice(2)
    exec(qur, (err, stdout) => {
    if (err) return reply(`FERDIZ-AFK : ~ ${err}`)
    if (stdout) {
    reply(" *FERDIZ-AFK* :\n\n\n"+stdout)
    }
    })
    }
    
    
    if (body.startsWith('<')) {
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
        try {
            return fdz.sendMessage(from, JSON.stringify(eval(`${args.join(' ')}`),null,'\t'),text, {quoted: mek})
        } catch (e) {
        reply(e)
        }}

//Akhir dari case
}
// akhir dari semua fitur
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[PRIVATE-CHAT]', 'aqua'), '[message]', color(command), 'nomor', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
