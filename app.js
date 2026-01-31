const express = require('express');
const app = express();
const port = 3000;

// Root Route
app.get('/', (req, res) => {
  res.render('home.html', { title: 'Home Page' });
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard.html', { title: 'Dashboard Page' });
});

// About Route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
