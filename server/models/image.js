import { Schema, model } from 'mongoose'

const imageSchema = new Schema({
    title:String,
    key:String,
    url:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
});

export default model('Image',imageSchema);
