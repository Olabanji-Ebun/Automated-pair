import { Layout } from "../components/Layout";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ServiceCard } from "../components/ServiceCard";
import { StaggerChildren, FadeIn } from "../components/StaggerChildren";
import { Code, Globe, Database, Smartphone, Cloud, Lock } from "lucide-react";

export const Services = () => {
  const services = [
    { icon: Code, title: "Web Development", desc: "Custom websites built with the latest technologies like React, Vue, and Node.js." },
    { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
    { icon: Globe, title: "SEO Optimization", desc: "Improve your search rankings and drive more organic traffic to your site." },
    { icon: Database, title: "Backend Solutions", desc: "Robust and scalable API development and database management." },
    { icon: Cloud, title: "Cloud Services", desc: "AWS and Azure setup, deployment, and maintenance for your infrastructure." },
    { icon: Lock, title: "Cybersecurity", desc: "Protecting your digital assets with advanced security audits and implementation." },
  ];

  return (
    <Layout>
      <div className="section pt-32">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h1>Our Services</h1>
              <p className="section-subtitle">Comprehensive digital solutions for your business needs.</p>
            </div>
          </RevealOnScroll>

          <StaggerChildren>
            <div className="grid-3">
              {services.map((s, i) => (
                <FadeIn key={i}>
                  <ServiceCard icon={s.icon} title={s.title} description={s.desc} />
                </FadeIn>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </div>
    </Layout>
  );
};
