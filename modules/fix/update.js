const axios = require('axios')

/**
 *
 * @param input { { id: String, phonetics: String } }
 * @returns {Promise<void>}
 */
const updatePhonetics = async (input) => {
    const options = {
        method: 'POST',
        url: 'https://app.memrise.com/ajax/thing/cell/update/',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authority: 'app.memrise.com',
            accept: 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
            cookie: 'ajs_user_id=67387921; _ga=GA1.2.310503052.1673526465; _gcl_au=1.1.1495029345.1673526465; _hjSessionUser_3090396=eyJpZCI6IjFiN2Y4MzQxLWQ1NjQtNTFhMC04MDRjLTY1MTVhMmZiNmU4OSIsImNyZWF0ZWQiOjE2NzM1MjY0NjU0NTksImV4aXN0aW5nIjp0cnVlfQ==; G_ENABLED_IDPS=google; cookieconsent_status=allow; hubspotutk=139a31be56195d638dcb280f879a3950; __hs_opt_out=no; __hs_initial_opt_in=true; __hstc=179716859.139a31be56195d638dcb280f879a3950.1674228959242.1674228959242.1674263185804.2; ajs_anonymous_id=4e3f7d47-e83e-4eb1-b78f-9692d937bce1; memrise_lang=en; sessionid_2=9ftre8p1v07sbz8spwtqdsanfvdt0ats8; _gid=GA1.2.976244378.1674724685; i18next=en; _hjSession_3090396=eyJpZCI6IjJlNDg4NTFkLWQxYWItNDU3Mi05ZmM2LTNkZWFlMjgyOWI0YyIsImNyZWF0ZWQiOjE2NzQ3NDkzNjg2MjAsImluU2FtcGxlIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; _hjIncludedInPageviewSample=1; _hjIncludedInSessionSample=1; csrftoken=URyb87bp8MiymNi912UVD0g39a1kAKx9BAKSFbpVKb1FjeUKNQL2FvuMyZMgQrZ9; ab.storage.sessionId.81b5a720-d869-44a3-b051-fbf0e709467a=%7B%22g%22%3A%22406cafeb-1ccc-8a54-7667-1455965b35f9%22%2C%22e%22%3A1674751535661%2C%22c%22%3A1674751504630%2C%22l%22%3A1674751505661%7D',
            origin: 'https://app.memrise.com',
            referer: 'https://app.memrise.com/course/6329674/idiom-and-phrasal-verb/edit/database/7379255/',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'x-csrftoken': 'URyb87bp8MiymNi912UVD0g39a1kAKx9BAKSFbpVKb1FjeUKNQL2FvuMyZMgQrZ9',
            'x-requested-with': 'XMLHttpRequest'
        },
        data: {
            thing_id: input.id,
            cell_id: '1',
            cell_type: 'attribute',
            new_val: input.phonetics
        }
    };

    await axios.request(options)

    console.log("Update: ", input.id, " ===> " ,input.phonetics)
}


module.exports = updatePhonetics
