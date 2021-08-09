import React, {useState, useEffect} from 'react'
import axios from 'axios'
const ImageGallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        (async()=>{
            const res = await axios.get('/api/images');
            setImages(res.data.images);
        })();
    }, []);
    return (
        <div className="row">
            {images.map(image=>(
                <div className="col-md-4 p-1 card-image" key={image._id} onClick={()=>console.log(image._id)}>
                    <img className="img-fluid h-100 w-100" src={image.url} alt={image.title} />
                </div>
            ))}
        </div>
    )
}

export default ImageGallery
