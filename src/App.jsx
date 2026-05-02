//import { useRoutes } from "react-router-dom";
import CreatorCard from "./components/CreatorCard";
import creatorList from "./creatorList.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="card-grid">
        {creatorList.map((creator, index) => (
          <CreatorCard key={index} creator={creator} />
        ))}
      </div>
    </>
  );
}

export default App;
