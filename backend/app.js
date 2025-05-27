import express from 'express';
import cors from 'cors'

import MovieRouter from './src/routes/Movie.route.js';

const app = express();
app.use(express.json());
app.use(cors())
app.use('/movies', MovieRouter);





export default app