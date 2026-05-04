import "./CreatorCard.css";
import { Link } from "react-router-dom";

const CreatorCard = ({ id, name, url, description, imageURL }) => {
  return (
    <article className="creator-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imageURL || "https://via.placeholder.com/400x200?text=No+Image"})`,
        }}
      ></div>
      <header>
        <h3>{name}</h3>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          role="button"
          className="outline contrast"
        >
          Visit Channel
        </a>
      </header>
      <p>{description}</p>
      <footer>
        <div className="grid">
          {" "}
          <Link to={`/view/${id}`} role="button">
            Details
          </Link>
          <Link to={`/edit/${id}`} role="button" className="secondary">
            Edit
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default CreatorCard;
