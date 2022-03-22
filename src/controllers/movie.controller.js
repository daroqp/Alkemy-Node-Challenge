const { Movies_series } = require('../database/models/');
const { Genres } = require('../database/models/');
const { Characters } = require('../database/models/');

const getMovies = async (req, res) => {
    try {

        const movies = await Movies_series.findAll({ attributes: ['title', 'image', 'createdAt'] });
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


module.exports = {
    getMovies,
    movieDetail
}