import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
const ImageDetail = () => {
    const [image, setTmage] = useState({
        title:'',
        url:'',
        _id:'',
    })
    const params = useParams();
    const history = useHistory();
    useEffect(() => {
       (async()=>{
        const res = await axios.get(`/api/images/${params.id}`);
        setTmage(res.data.image);
        console.log(res);
       })();
    }, [params.id])
    const handleDelete = async()=>{
        await axios.delete(`/api/images/${params.id}`);
        history.push('/')
    }
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                        <img src={image.url} alt={image.title} className="card-img-top" />
                <div className="card bg-dark">
                    <div className="card-body">
                        <h1>{image.title}</h1>
                        <button className="btn btn-outline-danger" onClick={handleDelete}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetail
