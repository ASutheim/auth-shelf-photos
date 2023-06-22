import { useState } from "react";
import { useDispatch } from "react-redux";

function ShelfForm () {

    const dispatch = useDispatch();
    const [url , setUrl] = useState('')
    const [description , setDescription] = useState('');

    const handleSubmit = (event) => {


        event.preventDefault();

        dispatch({
            type: 'POST_IMAGE',
            payload: {image_url: url , description: description}
        })

        setUrl('')
        setDescription('');
    }


    return (

        <>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <legend>New Picture Form</legend>
                <lable htmlFor="PicUrl">Picture URL: </lable>
                <input
                name="PicUrl"
                value={url}
                placeholder="Enter url"
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                required
                />

                
                <lable htmlFor="Description">Description: </lable>
                <input
                name="Description"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                required
                />
                
                <button type="submit">Submit</button>

        </form>
        </>


    )
}

export default ShelfForm;
