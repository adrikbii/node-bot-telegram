const express = require('express');
const cors = require('cors');

const faqRoutes = require('./routes/faq.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/faq', faqRoutes);

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 API administrativa funcionando en http://localhost:${PORT}`);
});