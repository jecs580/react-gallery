import { Router } from 'express'
import AWS from 'aws-sdk'
import config from '../config'
const router = Router();

const spacesEndpoint = new AWS.Endpoint(config.Endpoint)

const s3 = new AWS.S3({
    endpoint:spacesEndpoint
});

router.get('/api/images', async(req,res)=>{})
router.get('/api/images/:id', async(req,res)=>{})
router.post('/api/images/upload', async(req,res)=>{
    const {file} = req.files;
    try {
        const uploadObject = await s3.putObject({
            ACL:'public-read',
            Bucket: config.BucketName,
            Body:file.data,
            Key:file.name
        }).promise();
        console.log(uploadObject);

    } catch (error) {
        console.log(error);
        res.send(error);
    }    
    return res.json({
        msg:'recibido'
    })
})
router.delete('/api/images/:id', async(req,res)=>{})

export default router;