import { useRoutes } from "react-router-dom";
import CreatorCard from "./components/CreatorCard";
//import creatorList from "./creatorList.js";
import ShowCreator from "./pages/ShowCreators.jsx";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/EditCreator";
import "./index.css";

function App() {
  let element = useRoutes([
    { path: "/", element: <ShowCreator /> },
    { path: "/new ", element: <AddCreator /> },
    { path: "/view", element: <ViewCreator /> },
    { path: "/edit", element: <EditCreator /> },
  ]);
  return <div className="App">{element}</div>;
}

export default App;
