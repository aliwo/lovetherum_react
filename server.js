import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(`${__dirname}/build/favicon.ico`));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', (req, res) => {
    return res.send('pong');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
