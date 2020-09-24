require('http')
.Server((req, res) => {
  res.writeHead({'Content-Type': 'text/html; charset=utf-8'});
  require('fs').createReadStream('./index.html').pipe(res));
} 
.listen(process.env.PORT);
