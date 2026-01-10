import { Layout } from "../components/Layout";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import "./Contact.css";

export const Contact = () => {
  return (
    <Layout>
      <div className="section pt-32">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h1>Get in Touch</h1>
              <p className="section-subtitle">We'd love to hear from you. Fill out the form below.</p>
            </div>
          </RevealOnScroll>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="info-item">
                <div className="icon-circle"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>hello@techflow.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><MapPin size={20} /></div>
                <div>
                  <h4>Address</h4>
                  <p>123 Innovation Dr, Tech City</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group full-width">
                <label>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width">
                Send Message <Send size={18} style={{ marginLeft: "0.5rem" }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
