const fs = require("fs");

const destroyImage = (image, sector) => {
    const pathImage = `./src/storage/${sector}/${image}`;
    if (fs.existsSync(pathImage)) fs.unlinkSync(pathImage);
};

module.exports = { destroyImage };
