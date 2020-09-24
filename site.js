require('http')
.Server((req, res) => {
  res.writeHead({'Content-Type': 'text/html; charset=utf-8'});
  const file = require('fs').readFileSync('./index.html');
  res.end(file);
} 
.listen(process.env.PORT);
