const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(8000, () => {
  console.log('サーバーが起動しました。ポート: 8000');
});