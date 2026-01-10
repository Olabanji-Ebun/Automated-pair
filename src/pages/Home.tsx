import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { StaggerChildren, FadeIn } from "../components/StaggerChildren";
import { Code, Palette, Smartphone, Rocket } from "lucide-react";
import "./Home.css";

export const Home = () => {
  return (
    <Layout>
      <Hero />

      <section className="section bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">We deliver excellence in every project</p>
            </div>
          </RevealOnScroll>

          <StaggerChildren>
            <div className="grid-3">
              <FadeIn>
                <ServiceCard
                  icon={Code}
                  title="Clean Code"
                  description="We write scalable, maintainable, and efficient code that powers your business logic seamlessly."
                />
              </FadeIn>
              <FadeIn>
                <ServiceCard
                  icon={Palette}
                  title="Modern Design"
                  description="Beautiful, user-centric interfaces that engage your audience and reflect your brand identity."
                />
              </FadeIn>
              <FadeIn>
                <ServiceCard
                  icon={Smartphone}
                  title="Responsive"
                  description="Your website will look and work perfectly on all devices, from desktops to smartphones."
                />
              </FadeIn>
            </div>
          </StaggerChildren>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-box">
            <RevealOnScroll>
              <h2>Ready to start your project?</h2>
              <p>Let's collaborate to bring your vision to life.</p>
              <button className="btn btn-primary btn-lg mt-3">
                <Rocket className="mr-2" size={20} /> Get a Quote
              </button>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};
