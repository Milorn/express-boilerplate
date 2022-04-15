//Bootstrap the application
const app = require('./bootstrapers/bootstrap');

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, '0.0.0.0', () => {
    console.log(`Server running on: http://${SERVER_HOST}:${SERVER_PORT}`);
});