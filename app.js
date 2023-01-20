const express = require('express');

const app = express();

const path = require('path');

const publicPath = path.join(__dirname, "/public");

const port = 3000

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.listen(port, () => {
    console.log(`Conectado en el puerto ${port}`);
})