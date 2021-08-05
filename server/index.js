import express from 'express';
import fileUpload from 'express-fileupload'
import IndexRoutes from './routes/index.routes'
import ImageRoutes from './routes/images.routes'
import './db';
const app = express();

app.set('port', process.env.PORT||4000);
app.use(fileUpload({
    tempFileDir:'/temp'
}));
app.use(IndexRoutes);
app.use(ImageRoutes);

app.listen(app.get('port'))
console.log(`Servidor en puerto: ${app.get('port')}`);