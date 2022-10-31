const multer  = require('multer');
const fs = require("fs");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.resolve('./uploads');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`
    cb(null, filename);
    req.body.img_product = filename;
  },
});
const upload = multer({ storage: storage  })

module.exports = upload;