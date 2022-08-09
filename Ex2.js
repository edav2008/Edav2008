const AWS = require('aws-sdk');
const fs = require('fs')

const s3 = new AWS.S3({region: 'us-east-1'});

const uploadFile = () => {
    
    const fileContent = fs.readFileSync('upload-file-stu9-js.txt')

  
    const params = {
        Bucket: 'siu-avb-bucket',
        Key: 'file-stu9-js.txt',
        Body: fileContent
    };

   
    s3.upload(params, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};


uploadFile();
