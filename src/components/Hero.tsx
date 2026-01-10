import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Build Your Digital <span className="text-gradient">Future</span>
          </h1>
          <p className="hero-subtitle">
            We transform ideas into powerful digital experiences. Expert web development, modern design, and scalable solutions for growing businesses.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
