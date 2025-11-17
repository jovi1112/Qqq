const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/join', async (req, res) => {
    const { serverId, userCount } = req.query;

    try {
        // Lógica para unirse al servidor y añadir usuarios
        // Aquí puedes usar la API de Discord o cualquier otra lógica necesaria
        const inviteLink = `https://discord.gg/${serverId}`;

        // Simulación de unión al servidor
        await axios.get(inviteLink);

        // Simulación de adición de usuarios
        for (let i = 0; i < userCount; i++) {
            // Lógica para añadir usuarios
            // Puedes usar una API de terceros o generar invitaciones
        }

        res.json({ message: `Se unió al servidor y se añadieron ${userCount} usuarios.` });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al unir el servidor y añadir usuarios.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
