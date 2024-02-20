import Pizza from "./Pizza";
import "../index.css";
import { pizzaData } from "../lib/data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    </main>
  );
}
