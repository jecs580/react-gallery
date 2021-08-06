import { Router } from 'express'
import AWS from 'aws-sdk'
import config from '../config'
import Image from '../models/image'
const router = Router();

const spacesEndpoint = new AWS.Endpoint(config.Endpoint)

const s3 = new AWS.S3({
    endpoint:spacesEndpoint
});

router.get('/api/images', async(req,res)=>{
    const images = await Image.find();
    return res.json({
        ok:true,
        images
    })

})
router.get('/api/images/:id', async(req,res)=>{
    const image = await Image.findById(req.params.id);
    return res.json({
        ok:true,
        image
    })
})
router.post('/api/images/upload', async(req,res)=>{
    const {file} = req.files;
    try {
        await s3.putObject({
            ACL:'public-read',
            Bucket: config.BucketName,
            Body:file.data,
            Key:file.name
        }).promise();
        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${file.name}`;
        const image = new Image({
            url:urlImage,
            title: req.body.title,
            key: file.name
        });
        await image.save();
        return res.json({
            ok:true,
            image
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }    
   
})
router.delete('/api/images/:id', async(req,res)=>{})

export default router;