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
const fileFilter = (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const validExtention = /(jpg|jpeg|png)/;
    const isValidExtension = ext.match( validExtention );

    if( isValidExtension ) {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('File extension not valid.'));
    }
}


const uploadFile = multer({ storage, fileFilter }).single('image');

module.exports = uploadFile;