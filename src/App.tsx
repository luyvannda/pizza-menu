import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex flex-col items-center gap-12 overflow-hidden md:gap-28">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
