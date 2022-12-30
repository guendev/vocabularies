const db = require('./1-Số.json')
const axios = require('axios')

let words = ''


const getExtraWord = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try {
        const {data} = await axios.get(url)
        if (Array.isArray(data) && data.length) {
            const meanings = data[0]
            const phoneticsUK = meanings.phonetics[1]
            if (phoneticsUK) {
                return phoneticsUK.text
            }
        }
    } catch (e) {
        console.log('======= Not found', word)
        //
    }
}


const func = async () => {

    for (const word of db) {
       //  const extraWord = await getExtraWord(word[0])

        let _word = ''

        _word += word[0] + ',' + word[1]

        // _word += ',' + (extraWord ?? '-')
        //
        _word += '\n'

        words += _word
    }

    console.log("==============DONE=================")

    console.log(words)
}

func()
