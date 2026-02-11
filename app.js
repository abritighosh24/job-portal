const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('static'));

// Root Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/template/home.html');
});



// About Route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
