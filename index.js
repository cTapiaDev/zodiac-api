const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "¡Esta es una API del Zodiaco!",
        status: "success"
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})