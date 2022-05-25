import "./Card.css";
import { useState } from "react";

export default function Card({
  name,
  status,
  species,
  gender,
  location,
  image,
  isBookmarked,
}) {
  const [state, setState] = useState(true);

  return (
    <section className={`${state === true ? "card" : "card--toggled"}`}>
      <svg
        className={`card__icon bi bi-bookmark-fill ${
          isBookmarked ? "card__icon--active" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />{" "}
      </svg>
      <img className="card__image" src={image} alt=""></img>
      <h2 className="card__heading">{name}</h2>
      <button
        className="card__button"
        onClick={() => {
          setState(!state);
        }}
      >
        {state === true ? "Show details" : "Hide details"}
      </button>
      <ul className={`card__list ${state === true ? "hidden" : ""}`}>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
        <li>Location: {location.name}</li>
      </ul>
    </section>
  );
}
