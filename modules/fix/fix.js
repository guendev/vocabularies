const axios = require('axios')
const {parse} = require("node-html-parser");

const toPhonetics = require("../phonetics")
const updatePhonetics = require("./update")
const resource = require("./resource/1.json")
const fs = require("fs");
const path = require("path")

const fix = async () => {

    const result = []

    for (let i = 0; i < resource.length; i++) {
        const item = resource[i]
        const txt = await toPhonetics(item.text)
        result.push({
            ...item,
            phonetics: "/" + txt.trim() + "/"
        })

        await updatePhonetics({
            id: item.id,
            phonetics: "/" + txt.trim() + "/"
        })

    }

    fs.writeFileSync(path.join(__dirname, '/resource/1.json'), JSON.stringify(result, null, 2))

    console.log("Done")
}


const autoAll = async () => {

    for (let i = 69; i <= 69; i++) {

        console.log("Page: " + i + " ======================")

        const site = await axios.get(`https://app.memrise.com/course/6329674/idiom-and-phrasal-verb/edit/database/7379255/?page=${i}`, {
            headers: {
                authority: 'app.memrise.com',
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'cache-control': 'max-age=0',
                cookie: 'ajs_user_id=67387921; _ga=GA1.2.310503052.1673526465; _gcl_au=1.1.1495029345.1673526465; _hjSessionUser_3090396=eyJpZCI6IjFiN2Y4MzQxLWQ1NjQtNTFhMC04MDRjLTY1MTVhMmZiNmU4OSIsImNyZWF0ZWQiOjE2NzM1MjY0NjU0NTksImV4aXN0aW5nIjp0cnVlfQ==; G_ENABLED_IDPS=google; cookieconsent_status=allow; hubspotutk=139a31be56195d638dcb280f879a3950; __hs_opt_out=no; __hs_initial_opt_in=true; __hstc=179716859.139a31be56195d638dcb280f879a3950.1674228959242.1674228959242.1674263185804.2; ajs_anonymous_id=4e3f7d47-e83e-4eb1-b78f-9692d937bce1; memrise_lang=en; sessionid_2=9ftre8p1v07sbz8spwtqdsanfvdt0ats8; _gid=GA1.2.976244378.1674724685; i18next=en; _hjSession_3090396=eyJpZCI6IjJlNDg4NTFkLWQxYWItNDU3Mi05ZmM2LTNkZWFlMjgyOWI0YyIsImNyZWF0ZWQiOjE2NzQ3NDkzNjg2MjAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjIncludedInSessionSample=1; _hjAbsoluteSessionInProgress=1; csrftoken=0BfGZCc8Ouk7vUedA1MmtHCZvzxcQjP9HkrnwGqEqT3eslQOmPDtvcQIUoi860h9; ab.storage.sessionId.81b5a720-d869-44a3-b051-fbf0e709467a=%7B%22g%22%3A%22a32062de-b658-4949-1944-4a18d615f6f2%22%2C%22e%22%3A1674752998976%2C%22c%22%3A1674752957589%2C%22l%22%3A1674752968976%7D',
                referer: 'https://app.memrise.com/course/6329674/idiom-and-phrasal-verb/edit/database/7379255/?page=70',
                'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
            }
        })

        const root = parse(site.data)


        const lists = root.querySelectorAll('tbody.things > tr.thing')

        for (let i = 0; i < lists.length; i++) {

            const element = lists[i]

            const item = {
                id: element.getAttribute('data-thing-id'),
                text: element.querySelector('td.cell.text.column[data-key="1"] .text').innerText
            }

            const phonetics = await toPhonetics(item.text)

            await updatePhonetics({
                ...item,
                phonetics: "/" + phonetics.trim() + "/"
            })
        }
    }

}

autoAll()

// fix()

