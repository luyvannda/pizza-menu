import Pizza from "./Pizza";
import "../index.css";
import { pizzaData } from "../lib/data";

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="flex flex-col items-center gap-16">
      <h2 className="inline-block border-b-2 border-t-2 border-[#252525] py-4 text-[2.4rem] font-medium uppercase tracking-[3px]">
        Our Menu
      </h2>

      {numPizzas > 0 ? (
        <>
          <p className="w-[80%] text-center text-2xl leading-6">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="grid list-none grid-cols-2 gap-[4.8rem]">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.id} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p className="w-[80%] text-center text-2xl leading-6">
          We&apos;re still working on our menu. Please come back later :)
        </p>
      )}
    </main>
  );
}
