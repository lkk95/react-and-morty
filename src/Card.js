import "./Card.css";

function Card({ name }) {
  return (
    <section className="card">
      <svg
        className="card__icon bi bi-bookmark-fill"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />{" "}
      </svg>
      <img
        className="card__image"
        src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png"
        alt=""
      ></img>
      <h2 className="card__heading">{name}</h2>
      <button className="card__button">Show Details</button>
    </section>
  );
}

export default Card;
