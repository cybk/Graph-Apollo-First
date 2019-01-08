import express from 'express';
import cors from 'cors';

const app = express();

function setPort(port = 500) {
    app.set('port', parseInt(port, 10));
}

function listen() {
    const port = app.get('port') || 500;
    app.listen(port, () => {
        console.log(`The server is running and listening at http://localhost:${port}`);
    });
}

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.get('/api/status', (req, res) => {
    res.send({status: 'ok'});
});

export default {
    getApp: () => app,
    setPort,
    listen
};