import Pizza from "./Pizza";
import "../index.css";
import { pizzaData } from "../lib/data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.id} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}
