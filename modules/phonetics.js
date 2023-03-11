const axios = require('axios')
const {parse} = require("node-html-parser");

const toPhonetics = async (text) => {

    const res = await axios.post('https://tophonetics.com/', {
        text_to_transcribe: text,
        submit: 'Show+transcription',
        output_dialect: 'am',
        output_style: 'only_tr',
        weak_forms: 'on',
        preBracket: '',
        postBracket: '',
        speech_support: '1',
        ak_bib: '',
        ak_bfs: '1674749420260',
        ak_bkpc: '0',
        ak_bkp: '',
        ak_bmc: '149;98,601;',
        ak_bmcc: '2',
        ak_bmk: '',
        ak_bck: '',
        ak_bmmc: '1',
        ak_btmc: '0',
        ak_bsc: '1',
        ak_bte: '',
        ak_btec: '0',
        ak_bmm: '186,333;'
    }, {
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "Referer": "https://tophonetics.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    })

    const root = parse(res.data)
    const phonetic = root.querySelector('#transcr_output')

    // console.log(phonetic.text)
    return phonetic.text || ''
}

toPhonetics('cut back on')

module.exports = toPhonetics

