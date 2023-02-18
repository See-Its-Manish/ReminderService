const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
// const {sendBasicEmail} = require('./services/email-service');
const jobs = require('./utils/job');
const {createChannel} = require('./utils/messageQueue');
const TicketController = require('./controllers/ticket-controller');
const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.post('/api/v1/tickets', TicketController.create);

    // const channel = await createChannel();
    app.listen(PORT, ()=> {
        console.log(`Server started at PORT:${PORT}`);
        // jobs();
       
    });
}

setupAndStartServer();