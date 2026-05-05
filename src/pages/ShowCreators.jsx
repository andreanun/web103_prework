import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

const ShowCreators = (props) => {
  return (
    <>
      <header className="hero">
        <h1 className="hero-title">CREATORVERSE</h1>
        <div className="hero-buttons">
          <Link to="/" role="button" className="hero-btn">
            VIEW ALL CREATORS
          </Link>
          <Link to="/new" role="button" className="hero-btn">
            ADD A CREATOR
          </Link>
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
