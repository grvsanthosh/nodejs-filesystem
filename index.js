import express from 'express';
import FileHandler from './src/Controller/index.js';

const app = express();
app.use(FileHandler);
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{console.log('listening on port');});