const uuid = require('uuid');

const { Movies_series } = require('../database/models/');
const { Genres } = require('../database/models/');
const { Characters } = require('../database/models/');
const { Character_Movie } = require('../database/models/');


const getMovies = async (req, res) => {

    try {

        let { title, genre_id, order } = req.query;
        const where = new Object();

        if( title ) where.title = { [Op.like]: `%${title}%` };
        if( genre_id ) where.genres_id = { [Op.like]: genre_id };
        if( !order ) order = 'ASC';

        const movies = await Movies_series.findAll({ 
            attributes: ['title', 'image', 'createdAt'],
            order: [ ['createdAt', order] ],
            where 
        });
        
        res.status(200).json({
            movies
        })

    } catch (error) {
        console.log( error );
    }
}

const movieDetail = async (req, res) => {

    try {
        const movie_id = req.params.movie_id;
        const movie = await Movies_series.findByPk(movie_id, { 
            attributes: ['title', 'image', 'rate'],
            include: [{
                model: Genres,
                attributes: [ 'name' ]
            },{
                model: Characters,
                attributes: ['name'],
                through: {attributes: []}
            }]
        });

        if( !movie ) res.status(404).json({ msg: 'Movie not found' });

        res.status(200).json({
            movie
        });

    } catch (error) {
       console.log( error ) ;
    }
}

const postMovie = async (req, res) => {

    const { title, image, rate, genre_id, characters } = req.body;
    const id = uuid.v4();

    try {

        await Movies_series.create({
            id: id,
            title: title,
            image: image,
            rate: rate,
            genres_id: genre_id,
        });

        await Character_Movie.bulkCreate(
            characters.map( character => {
                return {
                    id: uuid.v4(),
                    characters_id: character,
                    movies_series_id: id
                }
            })
        );

        res.status(200).json({
            msg: "Movie/serie created successfully!"
        })

    } catch (error) {
        console.log( error );
    }
}

const editMovie = async (req, res) => {

    const { title, image, rate, genre_id, characters } = req.body;

    try {

        await Movies_series.update({
            title: title,
            image: image,
            rate: rate,
            genres_id: genre_id,
        },{
            where: { id: req.params.movie_id }
        });
        
        await Character_Movie.destroy({ where: { movies_series_id: req.params.movie_id } })

        await Character_Movie.bulkCreate(
            characters.map( character => {
                return {
                    id: uuid.v4(),
                    characters_id: character,
                    movies_series_id: req.params.movie_id
                }
            })
        );

        res.status(204).json({
            msg: "Movie/serie updated successfully!"
        })

    } catch (error) {
       console.log( error ) ;
    }
}

const deleteMovie = async ( req, res ) => {

    try {
        
        const isDeleted = Movies_series.destroy({ where: { id: req.params.movie_id } });

        if( isDeleted ){
            res.status(200).json({
                msg: "Movie/serie has been deleted successfully!"
            })
        } else {
            res.status(400).json({
                msg: "Movie/serie doesn't  exist or worng id"
            })
        }

    } catch (error) {
       console.log( error );
    }
}

module.exports = {
    getMovies,
    movieDetail,
    postMovie,
    editMovie,
    deleteMovie
}