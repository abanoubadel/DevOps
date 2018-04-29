const http = require('http');
const redis = require('redis');

const redisClinet = redis.createClient();

const server = http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }

    redisClinet.incr('visits', function (e, n) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(`Hello From ${process.env.CONTAINER_NAME} \n\n`);
        res.write(`You are visitor #${n}`);
        console.log(`visitor counter ${n}`);
        res.end();
    });

});

server.listen(process.env.PORT, function () {
    console.log(`Server Started at http://${server.address().address}:${server.address().port}`);
});
