// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
http.createServer((req, res) => {
  // Check the request url
  if (req.url === '/') {
    // Read file
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }

  if (req.url === '/about') {
    // Read file
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'John Doe', age: 30 },
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
}).listen(3000, () => console.log('Server running...'));