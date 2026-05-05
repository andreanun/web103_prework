import "./CreatorCard.css";
import { Link } from "react-router-dom";

const CreatorCard = ({ id, name, description, imageURL }) => {
  return (
    <article
      className="creator-card"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="card-actions">
        <Link to={`/view/${id}`} title="Details">i</Link>
        <Link to={`/edit/${id}`} title="Edit">✎</Link>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};

export default CreatorCard;
