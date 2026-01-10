import { Layout } from "../components/Layout";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { StaggerChildren, FadeIn } from "../components/StaggerChildren";
import { motion } from "framer-motion";
import "./Gallery.css";

const projects = [
  { id: 10, title: "Modern Dashboard", category: "UI/UX" },
  { id: 11, title: "E-commerce App", category: "Mobile" },
  { id: 12, title: "Travel Blog", category: "Web" },
  { id: 13, title: "Finance Tracker", category: "Web App" },
  { id: 14, title: "Social Network", category: "Full Stack" },
  { id: 15, title: "Portfolio Site", category: "Design" },
];

export const Gallery = () => {
  return (
    <Layout>
      <div className="section pt-32">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h1>Our Portfolio</h1>
              <p className="section-subtitle">A showcase of our best work.</p>
            </div>
          </RevealOnScroll>

          <StaggerChildren>
            <div className="gallery-grid">
              {projects.map((p) => (
                <FadeIn key={p.id}>
                  <motion.div
                    className="gallery-item"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={`https://picsum.photos/id/${p.id}/400/300`} alt={p.title} />
                    <div className="gallery-overlay">
                      <h3>{p.title}</h3>
                      <p>{p.category}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </div>
    </Layout>
  );
};
