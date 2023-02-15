const fs = require('fs')
const path = require('path')

const key = 'IELTS NÂNG CAO'

const func = async () => {
    const resource = JSON.parse(fs.readFileSync( path.resolve(__dirname, `../mochi/${key}/${key}.json`)))

    let totalText = ''
    //
    let arrs = '['
    for (let i = 0; i < resource.length; i++) {
        const data = resource[i]
        arrs += '"' + data.name + '",'

        const vocabularies = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../mochi/${key}/resource/${data.name}.json`)))

        let text = ''

        for (const word of vocabularies.data) {
            text += word.content + '\t'
            text += word.trans + '\t'
            text += word.en_hint + '\t'
            text += (word.phonetic || '') + '\t'
            // text += word.position + '\t'
            text += '\n'
        }

        totalText += text

        await fs.writeFileSync(path.resolve(__dirname, `../mochi/${key}/memries/${i+1}_${data.name}.txt`), text)

    }

    arrs += ']'

    await fs.writeFileSync(path.resolve(__dirname, `../mochi/${key}/total.txt`), totalText)
    await fs.writeFileSync(path.resolve(__dirname, `../mochi/${key}/list.txt`), arrs)

    // let text = ''
    //
    // for (const word of source.data) {
    //     text += word.content + '\t'
    //     text += word.trans + '\t'
    //     text += word.phonetic + '\t'
    //     text += word.en_hint + '\t'
    //     text += word.position + '\t'
    //     text += '\n'
    // }
    //
    // await fs.writeFileSync('out.txt', text)
}

func()
