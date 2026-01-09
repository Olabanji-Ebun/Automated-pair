import { RevealOnScroll } from "../components/RevealOnScroll";

export const Gallery = () => {
  return (
    <div className="container">
      <RevealOnScroll>
        <h2>Gallery</h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p>Here are some snapshots of our work:</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <ul>
            <li>Project 1: Modern Website Design</li>
            <li>Project 2: E-commerce Platform</li>
            <li>Project 3: Portfolio Showcase</li>
        </ul>
      </RevealOnScroll>
    </div>
  );
};
