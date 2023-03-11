const axios = require('axios');
const topics = require('./Idioms/Idioms.json');
const fs = require('fs')
const toPhonetics = require("../phonetics");

const adjust = async () => {
    const _topics = []

    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        const words = []

        for (let j = 0; j < topic.length; j++) {
            const word = topic[j]

            if(word.phonetics) {
                words.push(word)
                continue
            }

            let phonetics = await toPhonetics(word.idiom);
            const _word = {
                idiom: word.idiom,
                meaning: word.meaning,
                example: word.example,
                phonetics
            }

            console.log(word.idiom, phonetics)

            words.push(_word)
        }
        _topics.push(words)
    }

    // write to file
    fs.writeFile('./Idioms/Idioms.json', JSON.stringify(_topics), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

adjust().then(() => console.log('done'))