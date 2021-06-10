const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const url_replace = require('../Statki/url_replace')
let users = []

const port = 3000
const server = http.createServer((req, res) => {

    switch (req.method) {
        case 'GET':

            if (req.url == '/') {
                fs.readFile('static/index.html', (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                    res.write(data)
                    res.end()
                })
            }

            else {
                let url = req.url
                url = url_replace.url_replace(url)

                fs.readFile(`static${url}`, (err, data) => {

                    if (err) return console.log(err)

                    else if (url.endsWith('.js'))
                        res.writeHead(200, {
                            'Content-Type': `application/javascript;charset=utf-8`
                        })

                    else if (url.endsWith('.css'))
                        res.writeHead(200, {
                            'Content-Type': `text/css`
                        })

                    else if (url.endsWith('.ico'))
                        res.writeHead(200, {
                            'Content-Type': `image/x-icon`
                        })

                    else if (url.endsWith('.png'))
                        res.writeHead(200, {
                            'Content-Type': `image/png`
                        })

                    else if (url.endsWith('.jpg') || url.endsWith('.jpeg'))
                        res.writeHead(200, {
                            'Content-Type': `image/jpeg`
                        })

                    else if (url.endsWith('.mp3'))
                        res.writeHead(200, {
                            'Content-Type': 'audio/mpeg'
                        })

                    res.write(data)
                    res.end()

                })
            }
            break

        case 'POST':
            break
    }

}).listen(port, () => console.log('server runs at port ' + port))
