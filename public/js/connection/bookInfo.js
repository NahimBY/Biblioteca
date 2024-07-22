const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/book-info', async (req, res) => {
  const { title } = req.query;
  const apiKey = 'AIzaSyACPnPjlX1sZfEfn18C_cn3iZRbyHQZ9oo';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.items && response.data.items.length > 0) {
      const book = response.data.items[0];
      const imageLinks = book.volumeInfo.imageLinks;
      const coverUrl = imageLinks?.extraLarge || imageLinks?.large || imageLinks?.medium || imageLinks?.small || imageLinks?.thumbnail;
      const description = book.volumeInfo.description;

      res.json({ coverUrl, description });
    } else {
      res.json({ error: 'No se encontró información para este título.' });
    }
  } catch (error) {
    console.error('Error al obtener la información del libro:', error);
    res.status(500).json({ error: 'Error al obtener la información del libro.' });
  }
});

module.exports = router;

//AIzaSyACPnPjlX1sZfEfn18C_cn3iZRbyHQZ9oo