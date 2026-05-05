import { useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./client";
import CreatorCard from "./components/CreatorCard";
//import creatorList from "./creatorList.js";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import "./index.css";

function App() {
  const [creators, setCreators] = useState([]);

  const fetchCreators = async () => {
    const { data } = await supabase
      .from("creators")
      .select()
      .order("created_at", { ascending: false });

    setCreators(data);
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  let element = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "/new", element: <AddCreator onAdd={fetchCreators} /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator onUpdate={fetchCreators} /> },
  ]);
  return <div className="App">{element}</div>;
}

export default App;
