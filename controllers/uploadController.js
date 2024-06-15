const express = require("express");
const router = express.Router();
const cloudinary = require("../cloudinary/config");
const upload = require("../multer_mw/multer");
const fs = require('fs')

router.post("/image", upload.single("image"), function (req, res) {
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error uploading file",
      });
    }
    fs.unlink(req.file.path, (unlinkErr)=>{
      if(unlinkErr) {
        console.error('error deleting file:', unlinkErr)
      }
    })
    const secureURL = result.secure_url;
    res.status(200).json(
       secureURL
    );
  });
});

module.exports = router;
