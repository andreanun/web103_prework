import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <main className="container" style={{ maxWidth: "700px", margin: "3rem auto", padding: "0 1rem" }}>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1.5rem",
          }}
        />
      )}

      <h1 style={{ color: "#5bc8e8", textTransform: "uppercase", letterSpacing: "2px" }}>
        {creator.name}
      </h1>

      <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.7", marginBottom: "2rem" }}>
        {creator.description}
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a href={creator.url} target="_blank" rel="noreferrer" role="button">
          Visit Channel
        </a>
        <Link to={`/edit/${id}`} role="button" className="secondary">
          Edit
        </Link>
        <Link to="/" role="button" className="outline">
          Back
        </Link>
      </div>
    </main>
  );
};

export default ViewCreator;
