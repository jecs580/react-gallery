import express from 'express';
import IndexRoutes from './routes/index.routes'
const app = express();

app.set('port', process.env.PORT||4000);
app.use(IndexRoutes);

app.listen(app.get('port'))
console.log(`Servidor en puerto: ${app.get('port')}`);