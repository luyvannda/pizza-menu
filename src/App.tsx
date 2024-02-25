import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-[4.8rem]">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
