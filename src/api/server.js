const express = require('express');
const cors = require('cors');

const faqRoutes = require('./routes/faq.routes');
const informacionRoutes = require('./routes/informacion.routes');
const contactosRoutes = require('./routes/contactos.routes');
const horariosRoutes = require('./routes/horarios.routes');
const carrerasRoutes = require('./routes/carreras.routes');
const horariosDocentesRoutes = require('./routes/horariosDocentes.routes');
const docentesRoutes = require('./routes/docentes.routes');
const calendarioRoutes = require('./routes/calendario.routes');
const anunciosRoutes = require('./routes/anuncios.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/faq', faqRoutes);
app.use('/api/informacion', informacionRoutes);
app.use('/api/contactos', contactosRoutes);
app.use('/api/horarios', horariosRoutes);
app.use('/api/carreras', carrerasRoutes);
app.use('/api/horarios-docentes', horariosDocentesRoutes);
app.use('/api/docentes', docentesRoutes);
app.use('/api/calendario', calendarioRoutes);
app.use('/api/anuncios', anunciosRoutes);

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌐 API administrativa funcionando en http://localhost:${PORT}`);
});