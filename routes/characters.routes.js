import express from 'express';
import CharacterController from '../controllers/character.controller.js';

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

const character = new CharacterController();

router.get('/', character.getCharacters);

/**
 * @swagger
 * /characters/all:
 *  get:
 *   summary: Obtiene una lista de personajes con sus habilidades
 *   description: Devuelve una lista de personajes con sus habilidades.
 *   responses:
 *      200:
 *          description: Lista de personajes con habilidades devuelta exitosamente
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 1
 *                              name:
 *                                  type: string
 *                                  example: Viper
 *                              skills:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              example: 1
 *                                          name:
 *                                              type: string
 *                                              example: Toxic Screen
 *                                          description:
 *                                              type: string
 *                                              example: Deploy a long line of gas emitters that you can reactivate to create a wall of toxic gas.
 *                                          characterId:
 *                                              type: integer
 *                                              example: 1
 *          tags:
 *             - Personajes
 */

router.get('/all', character.getCharactersWithSkils);

/**  
* @swagger
* /characters/{id}:
*  get:
*    summary: Obtiene una lista de habilidades por id de personaje
*    description: Devuelve una lista de habilidades por id de personaje.
*    parameters:
*      - in: path
*        name: id
*        required: true
*        description: Id del personaje
*        schema:
*          type: integer
*    responses:
*      200:
*        description: Lista de habilidades devuelta exitosamente
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*                type: object
*                properties:
*                  id:
*                    type: integer
*                    example: 1
*                  name:
*                    type: string
*                    example: Toxic Screen
*                  description:
*                    type: string
*                    example: Deploy a long line of gas emitters that you can reactivate to create a wall of toxic gas.
*                  characterId:
*                    type: integer
*                    example: 1
*    tags:
*      - Person
*      - Habilidades
*/
router.get('/:id', character.getSkillsByCharacterId);


export default router;