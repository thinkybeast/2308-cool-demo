import * as React from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeProvider";

const themeSet = {
  default: { backgroundColor: "BurlyWood", color: "Maroon" },
  cottoncandy: { backgroundColor: "lavender", color: "RoyalBlue" },
  gollum: { backgroundColor: "OliveDrab", color: "OrangeRed" },
};

const SelectNStuff = () => {
  console.log("Rendering SelectNStuff");

  const { theme, handleThemeChange, voteGhost, voteClown } =
    React.useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <select onChange={handleThemeChange}>
        <option value="default">Default</option>
        <option value="cottoncandy">Cotton Candy</option>
        <option value="gollum">Gollum</option>
      </select>
      <button style={themeSet[theme]} onClick={() => alert("bet")}>
        Cool
      </button>
      <div style={{ fontSize: "3rem", display: "flex", gap: "3rem" }}>
        <button onClick={voteGhost}>👻</button>
        <button onClick={voteClown}>🤡</button>
      </div>
    </div>
  );
};

const CoolComponentC = (props) => {
  console.log("Rendering CoolComponentC");

  return (
    <div>
      Cool Component C!!!
      <SelectNStuff {...props} />
    </div>
  );
};

const CoolComponentB = (props) => {
  console.log("Rendering CoolComponentB");

  return (
    <div>
      Cool Component B!!
      <CoolComponentC {...props} />
    </div>
  );
};

const CoolComponentA = (props) => {
  console.log("Rendering CoolComponentA");

  return (
    <div>
      Cool Component A!
      <CoolComponentB {...props} />
    </div>
  );
};

function Main(props) {
  console.log("Rendering Main");

  return (
    <main>
      <h2>This is the main</h2>
      <CoolComponentA {...props} />
    </main>
  );
}

const Banner = () => {
  console.log("Rendering Banner");

  const { theme } = React.useContext(ThemeContext);
  return <h1 style={themeSet[theme]}>Cool App for Cool Users 🐶</h1>;
};

const Votes = () => {
  console.log("Rendering Votes");
  const { ghostVotes, clownVotes } = React.useContext(ThemeContext);
  return (
    <div>
      <h3>
        Current score: <span>👻: {ghostVotes}</span>{" "}
        <span>🤡: {clownVotes}</span>
      </h3>
    </div>
  );
};

const Header = () => {
  console.log("Rendering Header");

  return (
    <header>
      <Banner />
      <Votes />
    </header>
  );
};

const Footer = () => {
  console.log("Rendering Footer");

  const { theme } = React.useContext(ThemeContext);

  return <footer style={themeSet[theme]}>This is le füt</footer>;
};

function App() {
  console.log("Rendering App");
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
