import "../App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [persons, setPersons] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results.map((person) => {
        return { ...person, isBookmarked: false };
      });
      setPersons(results);
    }
  }, []);

  function randomBoolean() {
    const randomBool = Math.random() > 0.5 ? true : false;
    setBoolean(randomBool);
  }

  console.log(persons);

  return (
    <main className="App-main">
      {persons.map((person) => (
        <Card
          key={person.id}
          name={person.name}
          status={person.status}
          species={person.species}
          gender={person.gender}
          location={person.location}
          image={person.image}
          isBookmarked={person.isBookmarked}
        />
      ))}
    </main>
  );
}
