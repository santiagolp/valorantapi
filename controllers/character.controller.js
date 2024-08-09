
import { characters, skills } from "../data/sample.js";



class CharacterController {

    getCharacters = (req, res) => {
        res.json(characters);
    }

    getSkillsByCharacterId = (req, res) => {
        if (!req.params.id) {
            res.status(400).json({ message: 'Character id is required' });
            return
        }
        const characterId = req.params.id;
        res.json(skills.filter(skill => skill.characterId == characterId));
    }

    getCharactersWithSkils = (req, res) => {
        const charactersWithSkills = characters.map(character => {
            return {
                ...character,
                skills: skills.filter(skill => skill.characterId == character.id)
            }
        });

        res.json(charactersWithSkills);
    }

}



export default CharacterController;