'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = module.exports = express();
var upload = multer({ dest: 'uploads/' });


app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));


// add the upload middleware 
//  upload.single('file')
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {

    let fileName = req.file.originalname;
    let fileSize = req.file.size
    let fileType = req.file.mimetype;
    let fieldName = req.file.fieldname;

    res.json({ "Field Name": fieldName, "File Name": fileName, "File Size": fileSize, "File Type": fileType })

})

app.listen(process.env.PORT || 3000, function () {
    console.log('Node.js listening ...');
});
