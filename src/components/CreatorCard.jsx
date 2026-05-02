import "./CreatorCard.css";

const CreatorCard = ({ creator }) => {
  return (
    <div className="creator-card">
      <img src={creator.imageURL} alt={creator.name} />
      <div className="overlay">
        <div className="name">{creator.name}</div>
        <a className="url" href={creator.url} target="_blank" rel="noreferrer">
          {creator.url}
        </a>
        <div className="description">{creator.description}</div>
      </div>
    </div>
  );
};

export default CreatorCard;
