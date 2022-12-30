const axios = require('axios');
const { parse } = require('node-html-parser')
const resource = require('./TIẾNG ANH CNTT/TIẾNG ANH CNTT.json');
const data = '_token='
const fs = require('fs')

const headers = {
    'authority': 'learn.mochidemy.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'cookie': 'isViewFirst=eyJpdiI6IjVOb1JCeHowTFZsMEpzNXRtcE9Fd0E9PSIsInZhbHVlIjoiNDlELzE2dWdpallGUHJGa2NManRGc2tuRjdYVmw4TldRT3R5VGc5MlVDbzNDTGF5VzRFaDZEb1hrQlB5RnlZeSIsIm1hYyI6ImNhZDQzYmY0NzFiZDMyZDQ5ZDZkNDY0NzA0YmU1ZDZiMDc2MWU1YjkxMTcyMGNhMTYwOTExYzhlNGVjYzYwNDkiLCJ0YWciOiIifQ%3D%3D; _gid=GA1.2.1188543014.1672333368; user_token=eyJpdiI6Ikt0a0NKbEt1b00rZUV4TG1hUHZBNWc9PSIsInZhbHVlIjoiS254WkFIRGlZY2UwRTFyNUNDdHBqWGRJT3AwVzM1WEg5L1N3QllMMlNpUmppaU9kZ2ZybExYa2xFcTNjcVljU01wdnpMT1d0L2dZMnFiaUF3djhOQnhjdklZTXVnSWdQSHkzRThqQ2lnakFWZG5zM2hQaTRWckVlNHNKeUgxRjlnYXR3OGpuUnFiVXhjSE0vSTRjUFAwcUcxZWV6aFZSMlkyWnBMaHpZVk5pTUJidGdzV2VLUVJHYWQ0anhCQ04xMkZjVVdQUUg3TWcwY1loUTJyOW0xUnVTaTg1cEtpNUhaRDZkOUgrdFprbEx5TWF6QktZN2NCTkpsQTdvNUxCMU00NVZsMkVyM0swU3g3ZFN1RUhMWWc9PSIsIm1hYyI6IjUwMDk5MDljZmI2MTUyMTk5OWIwNjM2ODAxMzNiMWI3N2NjOGJkZGMwMDM4ODdlMjgzMThjOWYzY2Y2ZTZmNGQiLCJ0YWciOiIifQ%3D%3D; _gat_gtag_UA_150440250_5=1; XSRF-TOKEN=eyJpdiI6Ik9NTHVkKzlQNVEwcUR3QUtXYnF3SlE9PSIsInZhbHVlIjoiaGExRnYva2dROHQzaDRlT1dPbDQ5c3Q0d282Vy9uWVZ0bWNlcDFCdkg1WmJ1ZVVGbnUzL3FWVEp3dEtlanEwTlZ5OEw0S1NJSkNabjJ5RC9VenNYQm9SdnE5WjQ1L2swOTRQTHhkUTBueVBCYzdZOWdKeTdSSFBLR1MxTlBVdW0iLCJtYWMiOiI3M2QwM2ZlYmQ2NzdiMTFkMDVlNjYxZTNmYzEzODUzMWExMjQxZWMxYzJmOTkwZGJmMTE0NjJlZTk2YzRlYTE3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjVuMlhiU0VPb2dBQ0FxZnl5WG9wcHc9PSIsInZhbHVlIjoiNWVvUTB0anZaeDZKTlpsS2EyTm44bE5aS2dRaWVGZjAwdHVMTStLdmF3eFZwU0NzSXMrSkJsRDYxTlVOcWlLWTMxV3hUa1ZaMFBaNU0xbGlZdU9iM041MzhLeHRMQ2h1bU9GUGszM095VlJCK0wvRjV6MGI3WHFFME9VZUlETkEiLCJtYWMiOiJlZDhlNWZlMTc0MDg4OWZiNjE5ODI4ZDk4MjQ4Y2FhNDcxZDA0NDI0MDIxMmVlYWFjNzBhMTFiZDdmMGNjOTlkIiwidGFnIjoiIn0%3D; _ga_PC7947QMX9=GS1.1.1672327386.2.1.1672333484.15.0.0; _ga=GA1.1.1262895795.1672333368; XSRF-TOKEN=eyJpdiI6IlkxZkdtSWFlbUc3R0xBZG9CTEJabHc9PSIsInZhbHVlIjoiSzhkU2JFandTd3BHSXhnZmZzL2F2UnJYRnFrYVFuakpjdHV6WnFwendkMzVpbjU1NDhwZHV6T0pPdXZrRUFiNElYZ3FDZkRzN3cyaTkxYkU0dVdFWDhuY2JuM0RYRkZnUFdoOU1HeEpMcWxSQWZneWl4RE5KUFgzWlJqWWZqd0oiLCJtYWMiOiI5NzA0YmIwODJmOWFhODRmZTZjNTBhMDM1ZTkxN2I4MWRiNDljYTQyNzA2ZjcyMmE3OGRmY2EwOWVkNzM2OWY3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjU2M3BnNndZekcxbW8wQUZmMkJrblE9PSIsInZhbHVlIjoiMUVVc1JjOFo2cWw4d2pRbkxyNU5UTERCZFppZVNoc0NSbUpqSnJhTkRxQ09kN3M0clZ4RWlXVnNseVhJRllFMTY4V05PL29HcGtXT0tWYzNWMTNNZm9Xc0dIYUlmQ1h4eXhDeVpzSnVJL29JVmZNemh2enBtU0NnaHI3RGZlREkiLCJtYWMiOiJmZGE5YzBmZDY3ZWM0OWQxNzY2M2JlODVhMzM4OTBiY2U3MTE3MTUwNTY4NDQ2ZGNjMTdmZDE3ODRkNWVjNGQ4IiwidGFnIjoiIn0%3D',
    'origin': 'https://learn.mochidemy.com',
    'referer': 'https://learn.mochidemy.com/user/10/456/learn',
    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
}

const func = async () => {
    for (const word of resource) {
        try {
            const p1 = await axios.get(word.link, {
                headers
            })

            const root = parse(p1.data)

            const _token = root.querySelector('input[name="_token"]').getAttribute('value')

            if(_token) {
                const p2 = await axios.post('https://learn.mochidemy.com/user/learn/get-data-learn', data + _token, {
                    headers
                })

                if(p2.data) {
                    const file = word
                    file.data = p2.data.data
                    fs.writeFileSync(`./TIẾNG ANH CNTT/resource/` + word.name + '.json', JSON.stringify(file))
                }
            }

            console.log(word.name)

        } catch (e) {
            console.log('Error', word.resource)
        }
    }
}

func()

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
