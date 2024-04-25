//Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  test();
  res.end('Hello World\n');
});

async function test() {
  try {
    const response = await fetch('https://archive.org/download/win3_Mineswee/win3_Mineswee.zip');
    console.log(response.headers.get('content-type'));
  } catch (e) {
    console.log('error', e);
  }
}

test();

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});