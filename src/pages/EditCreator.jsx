import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  // load the creator's info into the form
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (data) {
        setCreator(data);
      } else if (error) {
        console.error("Could not fetch creator.");
      }
    };
    fetchCreator();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  //now update the database
  const updateCreator = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);

    if (error) {
      console.error("Couldn't update creator: ", error);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="container">
      <h1>Edit Content Creator</h1>
      <form onSubmit={updateCreator}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={creator.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          URL
          <input
            type="url"
            name="url"
            value={creator.url}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={creator.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Image URL (Optional)
          <input
            type="text"
            name="imageURL"
            value={creator.imageURL || ""}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Creator</button>
      </form>
    </main>
  );
};

export default EditCreator;
