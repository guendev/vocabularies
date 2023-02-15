const getTexts = (page) => {
    const lists = document.querySelectorAll('tbody.things > tr.thing')

    const texts = []

    for (let i = 0; i < lists.length; i++) {

        const element = lists[i]

        const item = {
            id: element.getAttribute('data-thing-id'),
            text: element.querySelector('td.cell.text.column[data-key="1"]').innerText,
        }
        texts.push(item)
    }

    const dataStr =
        'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(texts))

    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)
    dlAnchorElem.setAttribute('download', page + '.json')

    document.body.append(dlAnchorElem)
    dlAnchorElem.click()
    dlAnchorElem.remove()
}

getTexts(1)
