import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>TechFlow</h3>
            <p>Empowering businesses with modern digital solutions. We create stunning websites and robust applications.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} />
                <span>123 Innovation Dr, Tech City, TC 90210</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} />
                <span>hello@techflow.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
