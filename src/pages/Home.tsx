import { RevealOnScroll } from "../components/RevealOnScroll";

export const Home = () => {
  return (
    <div className="container">
      <RevealOnScroll>
        <h2>Home</h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p>Welcome to our simple website. We are glad to have you here. Explore our content to know more about us.</p>
      </RevealOnScroll>
    </div>
  );
};
