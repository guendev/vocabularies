

const downloadLevel = (stt) => {
    const words = []

    document.querySelectorAll('.thing.text-text').forEach((el, index) => {
        const items = el.querySelectorAll('.col.text')


        const _words = {}

        items.forEach((item, index2) => {
            _words[index2 === 0 ? 'text' : 'meaning'] = item.innerText
        })

        words.push(_words)
    })

    const dataStr =
        'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(words))
    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)

    const name = document.querySelector('.progress-box-title').innerText

    dlAnchorElem.setAttribute('download', stt + '-' + name + '.json')

    document.body.append(dlAnchorElem)
    dlAnchorElem.click()
    dlAnchorElem.remove()
}

downloadLevel(1)
