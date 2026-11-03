# API de Clientes

API REST para gestionar clientes, con un frontend simple que consume los datos y los muestra en una tabla. Trabajo práctico de la materia **Desarrollo de Software** (Ingeniería en Sistemas de Información, UTN FRC).

## Funcionalidades

- CRUD de clientes (nombre, email y ciudad) sobre una base de datos SQLite.
- Validación de formato de email en el modelo.
- Carga automática de clientes de ejemplo la primera vez que se inicia el servidor.
- Frontend con Bootstrap que consulta la API con `fetch` y muestra un aviso si el servidor no responde.

## Tecnologías

- **Backend:** Node.js, Express, Sequelize (ORM), SQLite
- **Frontend:** HTML, JavaScript, Bootstrap 5

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/clientes` | Lista todos los clientes |
| GET | `/api/clientes/:id` | Devuelve un cliente por su ID |
| POST | `/api/clientes` | Crea un cliente (`nombre`, `email`, `ciudad` en el body) |
| DELETE | `/api/clientes/:id` | Elimina un cliente |

## Estructura

```
back/
├── index.js            # Servidor Express y rutas de la API
├── db.js               # Conexión a SQLite con Sequelize
└── modules/
    └── Cliente.js      # Modelo Cliente
front/
└── index.html          # Tabla de clientes que consume la API
```

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/Joamoreno1/ejercicio-api-de-clientes.git
cd ejercicio-api-de-clientes/back
npm install
node index.js
```

El servidor queda en [http://localhost:3000](http://localhost:3000). Con el servidor corriendo, abrí `front/index.html` en el navegador para ver la tabla de clientes.

## Autor

Joaquín Moreno · [GitHub](https://github.com/Joamoreno1) · [LinkedIn](https://www.linkedin.com/in/joaquin-moreno-0a07062a6/)
