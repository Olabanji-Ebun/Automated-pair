import { RevealOnScroll } from "../components/RevealOnScroll";

export const Contact = () => {
  return (
    <div className="container">
      <RevealOnScroll>
        <h2>Contact</h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p>Get in touch via email at <a href="mailto:example@example.com">example@example.com</a>.</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p>Follow us on social media:</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
      </RevealOnScroll>
    </div>
  );
};
