import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // insert the data into supabase
    const { error } = await supabase.from("creators").insert([creator]);

    if (error) {
      console.log(error);
    } else {
      navigate("/"); // send  user back home after successful add
    }
  };

  return (
    <main className="container">
      <h1>Add a New Creator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="url">Social Media URL</label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="https://www.instagram.com/..."
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          placeholder="Link to a photo..."
          onChange={handleChange}
        />

        <button type="submit">Submit Creator</button>
      </form>
    </main>
  );
};

export default AddCreator;
