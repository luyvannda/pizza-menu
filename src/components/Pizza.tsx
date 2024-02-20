import { FC } from "react";
interface PizzaProps {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

const Pizza: FC<PizzaProps> = ({
  id,
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) => {
  return (
    <div key={id} className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default Pizza;
