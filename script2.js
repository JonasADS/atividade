var http = require('http')
var url = require('url')
var calcula = require('./matematica.js')

//criando um objeto do tipo servidor
http.createServer(function (request, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    })

    var q = url.parse(request.url, true).query
    var txt = calcula(parseInt(q.n1), parseInt(q.n2), q.op)
    var txt2 = "o resultado: " + txt
    resp.end(txt2) //fechando a conexão

}).listen(4000)

//localhost:3000?nome=""&sobrenome=""
//localhost:3000/aulanode