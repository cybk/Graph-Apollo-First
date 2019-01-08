import express from 'express';
import cors from 'cors';

const app = express();

function setPort(port = 500) {
    app.set('port', parseInt(port, 10));
}