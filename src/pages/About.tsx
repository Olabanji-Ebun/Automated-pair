import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {
  return (
    <div className="container">
      <RevealOnScroll>
        <h2>About</h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p>This website is a demonstration of a basic layout created with HTML and CSS. It shows how to structure a web page effectively.</p>
      </RevealOnScroll>
    </div>
  );
};
