import { ReactNode } from "react";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  const conditionMessage = (): ReactNode => {
    return isOpen ? (
      <p>
        We&apos;re open until {closeHour}
        :00. Come visit us or order online.
      </p>
    ) : (
      <p>
        We&apos;re are happy to welcome you between {openHour}:00 - {closeHour}
        :00.
      </p>
    );
  };

  return (
    <footer className="text-[1.4rem]">
      <div className="flex flex-col items-center gap-[2.4rem]">
        {conditionMessage()}
        {isOpen && <button className="btn">Order</button>}
      </div>
    </footer>
  );
}
