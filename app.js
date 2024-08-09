import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import charactersRoutes from './routes/characters.routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3022;

app.use(cors()); // permite cors desde todos los origins
app.use(express.json());
app.use('/characters', charactersRoutes);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Valorant unofficial API',
      version: '1.0.0',
      description: 'Valorant unofficial api only for hobby',
      contact: {
        name: 'Santiago Dellepiane'
      },
      servers: ['http://localhost:3022']
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/documentation/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});