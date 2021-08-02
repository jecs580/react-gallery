import { json, Router } from 'express'

const router = Router();

router.get('/',(req,res)=>{
    return res.json({
        msg:'hola mundo'
    })
})
;

export default router;