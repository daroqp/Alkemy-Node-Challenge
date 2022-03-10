const uuid = require('uuid');
const { Characters } = require('../database/models/index.js')
const { Character_Movie } = require('../database/models/index.js')
const { Movies_series } = require('../database/models/index.js')

const getCharacters = async (req, res) => {

    try {
        const characters = await Characters.findAll({ attributes: [ 'name', 'image' ] });

        res.status(200).json({
            characters
        });

    } catch (error) {
        throw new Error( error );
    }
}

const postCharacter = async (req, res) => {

    const { name, image, weight, age, history, movies_ids } = req.body;
    const id = uuid.v4();
    
    try {
        await Characters.create({
            id: id,
            name: name,
            image: image,
            weight: weight,
            age: age,
            history: history,
        });

        await Promise.all(
            movies_ids.map( async movie_id => {
                await Character_Movie.create({
                    id: uuid.v4(),
                    characters_id: id,
                    movies_series_id: movie_id
                });
            })
        );        
        
        res.status(201).json({
            msg: "Character created successfully"
        })

    } catch (error) {
       throw new Error( error ); 
    }

};

const characterDetail = async ( req, res ) => {

    try {
        
        const character_id = req.params.character_id;
        const character = await Characters.findByPk( character_id, { 
            attributes: [ 'name', 'image', 'weight', 'age', 'history' ],
            include: [{ 
                as: "movies_or_series",
                model: Movies_series,
                attributes: [ 'title' ],
                through: {attributes: []}
            }]
        } );

        if( !character ) res.status(404).json({ msg: "Character not found" });

        res.json({
            character
        })

    } catch (error) {
       throw new Error ( error );
    }
};

const editCharacter = async ( req, res ) => {

};

const deleteCharacter = async ( req, res ) => {

};

module.exports = {
    getCharacters,
    postCharacter,
    characterDetail,
    editCharacter,
    deleteCharacter
}