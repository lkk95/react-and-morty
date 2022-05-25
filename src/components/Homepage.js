import "../App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [persons, setPersons] = useState([]);
  console.log(persons);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPersons(data.results);
    }
  }, []);

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
        />
      ))}
    </main>
  );
}
