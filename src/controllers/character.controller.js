const uuid = require('uuid');
const Character = require('../models/Character');

const getCharacters = async (req, res) => {

    try {
        
        const characters = await Character.findAll({ include: { association: 'Movies_series' } })
        res.json({
            characters
        })
    } catch (error) {
        throw new Error( error );
    }
}

const postCharacter = async (req, res) => {

    try {
        const { name, image, weight, age, history } = req.body;
        const id = uuid.v4();
        
        await Character.create({
            id: id,
            name: name,
            image: image,
            weight: weight,
            age: age,
            history: history
        });

        res.status(201).json({
            msg: "Character created successfully"
        })

    } catch (error) {
       throw new Error( error ); 
    }

}


module.exports = {
    getCharacters,
    postCharacter,
}