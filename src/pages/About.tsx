import { Layout } from "../components/Layout";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { StaggerChildren, FadeIn } from "../components/StaggerChildren";
import { Users, Target, History } from "lucide-react";

export const About = () => {
  return (
    <Layout>
      <div className="section pt-32">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h1>About TechFlow</h1>
              <p className="section-subtitle">Innovating for a better digital tomorrow.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 mb-5">
            <RevealOnScroll>
              <img
                src="https://picsum.photos/id/1/600/400"
                alt="Our Team"
                style={{ borderRadius: "1rem", boxShadow: "var(--shadow-lg)" }}
              />
            </RevealOnScroll>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <RevealOnScroll>
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, TechFlow started with a simple mission: to make high-quality digital solutions accessible to businesses of all sizes.
                  What began as a small team of passionate developers has grown into a full-service agency trusted by clients worldwide.
                </p>
                <p>
                  We believe in the power of technology to transform lives and businesses. Our team is dedicated to staying at the forefront of innovation.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <StaggerChildren>
            <div className="grid-3">
              <FadeIn>
                <div className="text-center p-4">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <Target size={32} color="var(--primary-color)" />
                  </div>
                  <h3>Our Mission</h3>
                  <p>To empower businesses with innovative technology that drives growth and efficiency.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="text-center p-4">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <Users size={32} color="var(--primary-color)" />
                  </div>
                  <h3>Our Team</h3>
                  <p>A diverse group of experts passionate about coding, design, and problem-solving.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="text-center p-4">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <History size={32} color="var(--primary-color)" />
                  </div>
                  <h3>Our History</h3>
                  <p>Years of experience delivering successful projects across various industries.</p>
                </div>
              </FadeIn>
            </div>
          </StaggerChildren>
        </div>
      </div>
    </Layout>
  );
};
