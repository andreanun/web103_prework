import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

const ShowCreators = (props) => {
  return (
    <>
      <header
        className="container"
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        <h1>CREATORVERSE</h1>
        <div className="grid">
          <div></div>
          <nav>
            <ul>
              <li>
                <Link to="/" role="button" className="outline">
                  View All
                </Link>
              </li>
              <li>
                <Link to="/new" role="button">
                  Add a Creator
                </Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
      </header>
      <main className="container">
        <div className="grid">
          {props.creators && props.creators.length > 0 ? (
            props.creators.map((creator) => (
              <CreatorCard
                key={creator.id}
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))
          ) : (
            <article>
              <h3>No Content Creators Found 😔</h3>
              <p>Your Creatorverse is empty. Add someone new!</p>
            </article>
          )}
        </div>
      </main>
    </>
  );
};

export default ShowCreators;
