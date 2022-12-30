const axios = require('axios')
const { parse } = require('node-html-parser')
const fs = require('fs')
const source = require('../1.json')

const cambridgeDownload = async (word) => {
    // ...
    const url = `https://dictionary.cambridge.org/vi/dictionary/essential-american-english/${encodeURIComponent(word)}`
    const res = await axios.get(url)
    const root = parse(res.data)

    const prononc = root.querySelector('.dpron')
    const example = root.querySelector('.ddef_b .dexamp')

    return {
        prononc: prononc ? prononc.innerText : '',
        example: example ? example.innerText : '',
    }
}


// cambridgeDownload('act')


const func = async () => {
    const words = []

    for (const word of source) {

        const cambridge = await cambridgeDownload(word.text)

        const _word = {
            ...word,
            ...cambridge,
        }

        console.log(_word.text, _word.prononc, _word.meaning, _word.example)

        words.push(_word)
    }

    fs.writeFileSync('1.json', JSON.stringify(words, null, 2))
}

func()
