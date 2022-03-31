const multer = require('multer');

const storage = multer.diskStorage({
    destination: function( req, file, cb ){
        const subPath = req.originalUrl.split('/')[1];
        const pathStorage = `${__dirname}/../storage/${subPath}`;
        cb(null, pathStorage);
    },
    filename: function( req, file, cb ){
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;