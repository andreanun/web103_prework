import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { useState, useEffect } from "react";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching creators: ", error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <maim className="container">
      <div className="grid">
        {creators && creators.length > 0 ? (
          creators.map((item) => <CreatorCard key={item.id} {...item} />)
        ) : (
          <h2>No creators found. Time to add some!</h2>
        )}
      </div>
    </maim>
  );
};

export default ShowCreators;
