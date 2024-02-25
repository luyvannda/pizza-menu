export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="text-[1.4rem]">
      {new Date().toLocaleTimeString()}. We&apos;re currently open
    </footer>
  );
}
