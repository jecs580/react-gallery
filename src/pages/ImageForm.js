import React,{useState} from 'react'
import axios from 'axios'
const ImageForm = () => {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('')
    const handleChange= e=>{
        setFile(e.target.files[0])
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('title',title);
        const res = await axios.post('/api/images/upload',formData);
        console.log(res);
    }
    return (
        <div className="col-md-4 offset-md-4">
            <div className="card bg-dark text-light rounded-0 p-4">
                <div className="card-body">
                    <h3>Subir una Imagen</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" className="form-control bg-dark text-light rounded-0 my-3" placeholder="Escribe un título para tu foto" onChange={e=> setTitle(e.target.value)}/>
                        <input type="file" name="" className="form-control bg-dark text-light rounded-0" onChange={handleChange}/>
                        <div className="my-3">
                        <button className="btn btn-success rounded-0 w-100">Subir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageForm
