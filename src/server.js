import express from 'express';
import cors from 'cors';

// import GraphQl - Apollo
import Apollo from './graphql'

import config from './config';

const app = express();

function setPort(port = 500) {
    app.set('port', parseInt(port, 10));
}

function listen() {
    const port = app.get('port') || config.port;
    app.listen(port, () => {
        console.log(`The server is running and listening at http://localhost:${port}`);
    });
}

app.use(cors({
    origin: config.corsDomain,
    optionsSuccessStatus: 200
}));

app.get('/api/status', (req, res) => {
    res.send({status: 'ok'});
});

Apollo(app);

export default {
    getApp: () => app,
    setPort,
    listen
};