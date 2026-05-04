import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams(); // get ID from the URL
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id) // filter by the specific ID
        .single(); //  we expect only one result

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  if (!creator)
    return (
      <main className="container">
        <article aria-busy="true">Loading...</article>
      </main>
    );

  return (
    <main className="container">
      <article>
        <header>
          <h1>{creator.name}</h1>
          <Link to={`/edit/${id}`} role="button" className="secondary">
            Edit
          </Link>
        </header>

        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            style={{ maxWidth: "400px" }}
          />
        )}

        <p>
          <strong>Description:</strong> {creator.description}
        </p>

        <footer>
          <a href={creator.url} target="_blank" rel="noreferrer" role="button">
            Visit Channel
          </a>
        </footer>
      </article>
    </main>
  );
};

export default ViewCreator;
