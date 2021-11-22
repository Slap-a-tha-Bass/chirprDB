import * as express from 'express';
import * as passport from 'passport';
import * as cors from 'cors';
import apiRouter from './routes';
import * as path from 'path';
import { configurePassport } from './middlewares/passport-strategies.mw';

const app = express();

configurePassport(app);
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

