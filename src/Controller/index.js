import express from 'express';

import FileService from '../Service/FileService.js';

const fileHandler = express();

fileHandler.get('/read',FileService.readFile);

fileHandler.post('/write',FileService.writeFile);

export default fileHandler
