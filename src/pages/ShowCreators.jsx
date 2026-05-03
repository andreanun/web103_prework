import CreatorCard from "../components/CreatorCard";

const ShowCreators = (props) => {
  return (
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
  );
};

export default ShowCreators;
