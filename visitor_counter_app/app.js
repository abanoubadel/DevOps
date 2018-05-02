const http = require('http');
const redis = require('redis');

const redisClinet = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT || 6379,
});

const server = http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        console.log('favicon request');
        res.end();
        return;
    }

    redisClinet.incr('visits', function (e, n) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(`Hello From ${process.env.CONTAINER_NAME} \n\n`);
        res.write(`You are visitor #${n}`);
        res.write(`\n\n new feature 1`);
        res.write(`\n\n new feature 2`);
        res.write(`\n\n new feature 3`);
        res.write(`\n\n new feature 4`);
        res.write(`\n\n new feature 5`);
        res.write(`\n\n new feature 6`);
        console.log(`visitor counter ${n}`);
        res.end();
    });

});

server.listen(process.env.PORT, function () {
    console.log(`Server Started at http://${server.address().address}:${server.address().port}`);
});
