import { FC } from "react";
interface PizzaProps {
  pizzaObj: {
    id: number;
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    // soldOut: boolean;
  };
}

const Pizza: FC<PizzaProps> = ({
  pizzaObj: { id, name, ingredients, price, photoName },
}) => {
  return (
    <li key={id} className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </li>
  );
};

export default Pizza;
