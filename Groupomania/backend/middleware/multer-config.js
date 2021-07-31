const multer = require("multer");

const MIME_TYPES = {
  // notre dictionnaire d'extensions
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image.gif": "gif",
  "image.webp": "webp",
};

//this is the multer middleware for posts images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // destination des images
    callback(null, "upload");
  },
  filename: (req, file, callback) => {
//defining filename to make sure there's no double
    const name = file.originalname.replace(/\.[^/.]+$/, "");
    const extension = MIME_TYPES[file.mimetype]; //Declaring the extension
    callback(null, name + Date.now() + "." + extension);//Creating full filename with name + date + extension
  },
});
module.exports = multer({ storage: storage }).single("image"); // Images storing
