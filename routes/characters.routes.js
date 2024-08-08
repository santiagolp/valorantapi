import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Obtiene una lista de personajes
 *     description: Devuelve una lista de personajes con sus identificadores y nombres.
 *     responses:
 *       200:
 *         description: Lista de personajes devuelta exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Viper
 *     tags:
 *       - Personajes
 */
router.get('/', (req, res) => {
    const characters = [
        {
            id: 1,
            name: 'Viper'
        },
        {
            id: 2,
            name: 'Sage'
        },
        {
            id: 3,
            name: 'Breach'
        }
    ];

    res.json(characters);
});

export default router;