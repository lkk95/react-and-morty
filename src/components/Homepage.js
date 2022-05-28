import "../App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results.map((person) => {
        return { ...person, isBookmarked: Math.random() > 0.5 ? true : false };
      });
      setPersons(results);
    }
  }, []);

  function setBookmarks(id, newValue) {
    const newPersons = [...persons];
    newPersons.map((person) => {
      return id === person.id
        ? (person.isBookmarked = newValue)
        : person.isBookmarked;
    });
    setPersons(newPersons);
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
          setBookmark={(newValue) => setBookmarks(person.id, newValue)}
        />
      ))}
    </main>
  );
}
