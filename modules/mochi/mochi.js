const fs = require('fs')
const path = require('path')

const func = async () => {
    const resource = JSON.parse(fs.readFileSync( path.resolve(__dirname, '../mochi/NEW TOEIC/NEW TOEIC.json')))
    //
    let arrs = '['
    for (let i = 0; i < resource.length; i++) {
        const data = resource[i]
        arrs += '"' + data.name + '",'

        const vocabularies = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../mochi/NEW TOEIC/resource/${data.name}.json`)))

        let text = ''

        for (const word of vocabularies.data) {
            text += word.content + '\t'
            text += word.trans + '\t'
            text += word.phonetic + '\t'
            text += word.en_hint + '\t'
            text += word.position + '\t'
            text += '\n'
        }

        await fs.writeFileSync(path.resolve(__dirname, `../mochi/NEW TOEIC/memries/${i+1}_${data.name}.txt`), text)

    }

    arrs += ']'

    await fs.writeFileSync(path.resolve(__dirname, `../mochi/NEW TOEIC/list.txt`), arrs)

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
