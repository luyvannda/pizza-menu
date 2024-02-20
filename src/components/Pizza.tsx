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
    <div key={id}>
      <img src={photoName} alt="A Focaccia pizza" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  );
};

export default Pizza;
