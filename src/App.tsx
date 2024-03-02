import { Helmet } from "react-helmet";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const title = "Pizza Menu";
  const description =
    "A pizza menu project built with react, typescript and tailwind!";
  const imageUrl = "#";

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <title>{title}</title>
      </Helmet>

      <div className="flex flex-col items-center gap-12 overflow-hidden md:gap-28">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
