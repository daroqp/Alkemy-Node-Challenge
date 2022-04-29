const uuid = require("uuid");
const { Op } = require("sequelize");

const { Characters } = require("../database/models/index.js");
const { Character_Movie } = require("../database/models/index.js");
const { Movies_series } = require("../database/models/index.js");

const getCharacters = async (req, res) => {
  try {
    const { name, age, weight, movies } = req.query;
    const where = new Object();
    const whereMovie = new Object();

    if (name) where.name = { [Op.like]: `%${name}%` };
    if (age) where.age = { [Op.eq]: age };
    if (weight) where.weight = { [Op.eq]: weight };
    if (movies) whereMovie.id = movies;

    const characters = await Characters.findAll({
      attributes: ["name", "image"],
      include: [
        {
          model: Movies_series,
          as: "movies_or_series",
          attributes: [],
          where: whereMovie,
        },
      ],
      where,
    });

    res.status(200).json({
      characters,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

const postCharacter = async (req, res) => {
  const { name, weight, age, history, movies_ids = [] } = req.body;
  const image = req.file.filename;
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

    await Character_Movie.bulkCreate(
      movies_ids.map((movie_id) => {
        return {
          id: uuid.v4(),
          characters_id: id,
          movies_series_id: movie_id,
        };
      })
    );

    res.status(201).json({
      msg: "Character created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

const characterDetail = async (req, res) => {
  try {
    const character_id = req.params.character_id;
    const character = await Characters.findByPk(character_id, {
      attributes: ["name", "image", "weight", "age", "history"],
      include: [
        {
          as: "movies_or_series",
          model: Movies_series,
          attributes: ["title"],
          through: { attributes: [] },
        },
      ],
    });

    if (!character) return res.status(404).json({ msg: "Character not found" });

    res.status(200).json({
      character,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

const editCharacter = async (req, res) => {
  const { name, image, weight, age, history, movies_ids = [] } = req.body;

  try {
    await Characters.update(
      {
        name: name,
        image: image,
        weight: weight,
        age: age,
        history: history,
      },
      {
        where: { id: req.params.character_id },
      }
    );

    await Character_Movie.destroy({
      where: { characters_id: req.params.character_id },
    });

    await Character_Movie.bulkCreate(
      movies_ids.map((movie_id) => {
        return {
          id: uuid.v4(),
          characters_id: req.params.character_id,
          movies_series_id: movie_id,
        };
      })
    );

    res.status(200).json({
      msg: "Character updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const isDeleted = await Characters.destroy({
      where: { id: req.params.character_id },
    });

    if (isDeleted) {
      res.status(200).json({
        msg: "Character has been deleted successfully!",
      });
    } else {
      res.status(404).json({
        msg: "Character doesn't  exist or worng id",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  getCharacters,
  postCharacter,
  characterDetail,
  editCharacter,
  deleteCharacter,
};
