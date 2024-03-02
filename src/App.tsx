import { Helmet } from "react-helmet";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const title = "Pizza Menu";
  const description =
    "A pizza menu project built with react, typescript and tailwind!";
  const imageOg =
    "https://onedrive.live.com/embed?resid=FF8AC3081FC56D69%2188585&authkey=%21AIcJp8wM2mNNcMI&width=1200&height=630";

  const imageTwitter =
    "https://onedrive.live.com/embed?resid=FF8AC3081FC56D69%2188585&authkey=%21AIcJp8wM2mNNcMI&width=600&height=300";

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageOg} />
        <meta
          property="og:url"
          content="https://luyvannda.github.io/pizza-menu/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageTwitter} />
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
