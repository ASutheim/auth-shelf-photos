import { useState } from "react";
import { useDispatch } from "react-redux";

function ShelfForm() {
  const dispatch = useDispatch();
  // const [url , setUrl] = useState('')

  const [file, setFile] = useState();
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    dispatch({
      type: "POST_IMAGE",
      payload: formData,
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ShelfForm;
