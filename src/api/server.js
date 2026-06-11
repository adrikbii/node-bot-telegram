const express = require('express');
const cors = require('cors');

const faqRoutes = require('./routes/faq.routes');
const informacionRoutes = require('./routes/informacion.routes');
const contactosRoutes = require('./routes/contactos.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/faq', faqRoutes);
app.use('/api/informacion', informacionRoutes);
app.use('/api/contactos', contactosRoutes);

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌐 API administrativa funcionando en http://localhost:${PORT}`);
});