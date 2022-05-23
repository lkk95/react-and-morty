import "./App.css";
import Card from "./Card";

function Homepage() {
  return (
    <main className="App-main">
      <Card name="Rick Sanchez" />
      <Card name="Morty" />
      <Card name="Summer" />
    </main>
  );
}

export default Homepage;
