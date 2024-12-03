import { useState } from "react";
import img from "./assets/Photo3.jpg";

export default function App() {
  const [font, setFont] = useState<string>("space");
  const [background, setBackground] = useState<string>("blueberry");
  const [edges, setEdges] = useState<string>("soft");

  // Font
  // space, scary, military, romantic, cowboy, fantasy, superhero
  favouriteMovieGenre(font);

  // Background
  // watermelon, tomato, banana, orange, avocado, blueberry
  favouriteFruit(background);

  // Mode
  // light, dark
  favouriteMode("dark");

  // Edges
  // sharp, soft, round
  favouriteEdgeStyle(edges);

  function setProp(prop: string, value: string) {
    document.documentElement.style.setProperty(prop, value);
  }

  function favouriteEdgeStyle(style: string) {
    setProp("--image", "var(--" + style + ")");
  }

  function favouriteMovieGenre(font: string) {
    if (font) {
      setProp("--font", "var(--" + font + ")");
    }
  }

  function favouriteMode(mode: string) {
    if (mode === "light" || !mode) {
      setProp("--background", "var(--light)");
      setProp("--text", "var(--dark)");
    } else if (mode === "dark") {
      setProp("--background", "var(--dark)");
      setProp("--text", "var(--light)");
    }
  }

  function favouriteFruit(theme: string) {
    if (theme === "pastel") {
      setProp("--light", "#f2f6c3");
      setProp("--dark", "#68c4af");
    } else if (theme === "muted") {
      setProp("--light", "#4c5b64");
      setProp("--dark", "#45241c");
    } else if (theme === "love") {
      setProp("--light", "#f06836");
      setProp("--dark", "#ba0001");
    } else if (theme === "sky") {
      setProp("--light", "#99ccff");
      setProp("--dark", "#3366ff");
    } else if (theme === "forrest") {
      setProp("--light", "#91B247");
      setProp("--dark", "#597C2B");
    } else if (theme === "shiny") {
      setProp("--light", "#2e9afe");
      setProp("--dark", "#02197c");
    } else if (theme === "banana") {
      setProp("--light", "#fbec5d");
      setProp("--dark", "#6b3e26");
    } else if (theme === "watermelon") {
      setProp("--light", "#75b855");
      setProp("--dark", "#ad3838");
    } else if (theme === "tomato") {
      setProp("--light", "#d62e2e");
      setProp("--dark", "#600000");
    } else if (theme === "avocado") {
      setProp("--light", "#6b8c21");
      setProp("--dark", "#704012");
    } else if (theme === "orange") {
      setProp("--light", "#ffca16");
      setProp("--dark", "#f97300");
    } else if (theme === "blueberry") {
      setProp("--light", "#41a8f9");
      setProp("--dark", "#064490");
    } else {
      setProp("--light", "#f5f5f5");
      setProp("--dark", "#222222");
    }
  }

  const handleSiteSettings = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case "font":
        setFont(value);
        break;

      case "background":
        setBackground(value);
        break;

      case "edges":
        setEdges(value);
        break;

      default:
        console.error(`Site settings error`);
    }
  };

  return (
    <div className="main">
      <div className="site-settings">
        <label htmlFor="site-settings">Site Settings:</label>
        <form id="site-settings" action="">
          <select
            name="font"
            id="font"
            value={font}
            onChange={handleSiteSettings}
          >
            <option value="space">Space</option>
            <option value="scary">Scary</option>
            <option value="military">Military</option>
            <option value="romantic">Romantic</option>
            <option value="cowboy">Cowboy</option>
            <option value="fantasy">Fantasy</option>
            <option value="superhero">Superhero</option>
          </select>
          <select
            name="background"
            id="background"
            value={background}
            onChange={handleSiteSettings}
          >
            <option value="watermelon">Watermelon</option>
            <option value="tomato">Tomato</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="avocado">Avocado</option>
            <option value="blueberry">Blueberry</option>
          </select>
          <select
            name="edges"
            id="edges"
            value={edges}
            onChange={handleSiteSettings}
          >
            <option value="sharp">Sharp</option>
            <option value="soft">Soft</option>
            <option value="round">Round</option>
          </select>
        </form>
      </div>
      <img src={img} alt="Sbu" />
      <h1>Hi, my name is S'bu</h1>
      <h2>Fun facts about me:</h2>
      <ul>
        <li>27 years old</li>
        <li>Live in Cape Town</li>
        <li>Petrolhead</li>
      </ul>
      <p>
        Please connect with me on{" "}
        <a href="https://www.linkedin.com/in/sibulele-ngada/" target="_blank">
          LinkedIn here.
        </a>
      </p>
      <input type="text" placeholder="Enter email..." />
      <button>Join newsletter</button>
    </div>
  );
}
