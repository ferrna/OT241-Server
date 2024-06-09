require('dotenv').config()
const fs = require('fs')
const S3 = require("aws-sdk/clients/s3")


//accesos desde el ENV
const bucketName = process.env.SM_AWS_BUCKET_NAME
const region = process.env.SM_AWS_BUCKET_REGION
const accessKeyId = process.env.SM_AWS_ACCESS_KEY
const secretAccessKey = process.env.SM_AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey

})

//funcion para subir archivos al S3 de Amazon Web Services
const uploadImageS3 = file => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}


//funcion para ver imagen de S3
const getImageFromS3 = filekey => {
    const downloadParams = {
        Key: filekey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}

//exportar funciones

module.exports = {
    uploadImageS3,
    getImageFromS3
}