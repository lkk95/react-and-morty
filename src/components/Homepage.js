import "../App.css";
import Card from "./Card";

export default function Homepage() {
  return (
    <main className="App-main">
      <Card
        name="Alien Morty"
        imgURL={"https://rickandmortyapi.com/api/character/avatar/14.jpeg"}
        isBookmarked={false}
      />
      <Card
        name="Pizza-person"
        imgURL="https://rickandmortyapi.com/api/character/avatar/425.jpeg"
        isBookmarked={true}
      />
      <Card
        name="Doopidoo"
        imgURL="https://rickandmortyapi.com/api/character/avatar/433.jpeg"
        isBookmarked={false}
      />
    </main>
  );
}
