

const downloadLevel = () => {
    const words = []

    document.querySelectorAll('#list-lesson .open-loading').forEach((el, index) => {

        const _words = {}
       _words.name = el.querySelector('.lesson-item-title p').textContent?.trim()
        const link = el.getAttribute('onclick')
        _words.link = link.replace('handleClickAudioOpen(\'', '').replace('\')', '')

        words.push(_words)
    })

    const dataStr =
        'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(words))
    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)

    const name = document.querySelector('.course-item-button-2').textContent?.trim()

    dlAnchorElem.setAttribute('download', name + '.json')

    document.body.append(dlAnchorElem)
    dlAnchorElem.click()
    dlAnchorElem.remove()
}

downloadLevel()
