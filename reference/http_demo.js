// *************** Learning Phase 5 ******************
const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running...'));

// check localhost:5000 to view it