const conf = require('../../config/storage');

const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');

const Upload = multer({
    dest: './storage/tmp',
    limits: {
        fileSize: conf.maxFileSize, // max files size: 50mb
        files: conf.maxFiles // max number of files
    },
    fileFilter(req, file, cb) {

        cb(null, true);
        for (const mimetype of conf.acceptedMimetypes) {
            if (file.mimetype === mimetype) {
                cb(null, true);
                return;
            }
        }
        cb(null, false);
        //cb(new FileValidationError({mimetype: file.mimetype, field: file.fieldname}), false);
    }
});

const Store = async (file, folder, visibility = 'public') => {

    const ext = path.extname(file.originalname);
    const newFileName = file.filename + ext;
    const newDirectory = './storage/' + visibility + '/' + folder;
    const newPath = newDirectory + '/' + newFileName;

    try {
        await fs.mkdir(newDirectory, { recursive: true });
        await fs.rename(file.path, newPath);
        return {
            name: file.originalname,
            visibility: visibility,
            path: folder + '/' + newFileName,
            success: true
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            errors: err
        };
    }
};

const Remove = async (visibility, path) => {
    try {
        const filePath = './storage/' + visibility + '/' + path;
        await fs.unlink(filePath);
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports = {
    Upload,
    Store,
    Remove
};