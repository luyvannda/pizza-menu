import { FC } from "react";
interface PizzaProps {
  pizzaObj: {
    id: number;
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
}

const Pizza: FC<PizzaProps> = ({
  pizzaObj: { id, name, ingredients, price, photoName, soldOut },
}) => {
  return (
    <li
      key={id}
      className={`flex flex-col gap-[3.2rem] md:flex-row ${soldOut && "text-[#888]"}`}
    >
      <img
        className={`h-48 w-48 self-start object-cover object-center ${soldOut && "opacity-80 grayscale"}`}
        src={photoName}
        alt={name}
      />
      <div className="flex flex-col gap-3 py-2">
        <h3 className="text-[2rem] font-normal">{name}</h3>
        <p className="mb-auto text-[1.4rem] font-light italic">{ingredients}</p>

        <span className="block text-2xl">
          {soldOut ? "Sold Out" : `$${price}`}
        </span>
      </div>
    </li>
  );
};

export default Pizza;
