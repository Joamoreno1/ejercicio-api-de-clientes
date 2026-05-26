import express from 'express';

import cors from 'cors';

import sequelize from './db.js';

import Cliente   from './modules/Cliente.js';

const app  = express();
const PORT = 3000;

app.use(cors({origin: '*' }));

app.use(express.json());

app.get('/api/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor" });
    }
});

app.get('/api/clientes/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id)

        if (!cliente) {
            return res.status(404).json({error: 'No encontrado'});
        }
        
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

app.post('/api/clientes', async (req,res) => {
    try {
        const { nombre, email, ciudad } = req.body;

        const nuevoCliente = await Cliente.create({
            nombre,
            email,
            ciudad
        });

        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

app.delete('/api/clientes/:id', async (req,res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            res.status(404).json({error: 'No encontrado'});
        }

        await cliente.destroy();

        res.status(204).send()

    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

async function iniciar() {

    await sequelize.sync({ force: false });

    const count = await Cliente.count();
    if (count === 0) {
        await Cliente.bulkCreate([

            { nombre: 'Ana Gómez',   email: 'ana@mail.com',    ciudad: 'Córdoba'    },
            { nombre: 'Luis Pérez',  email: 'luis@mail.com',   ciudad: 'Rosario'    },
            { nombre: 'María López', email: 'maria@mail.com',  ciudad: 'Mendoza'    },
            { nombre: 'Carlos Ruiz', email: 'carlos@mail.com', ciudad: 'Buenos Aires' },
        ])
    }

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
};

iniciar();






