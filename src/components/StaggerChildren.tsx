import { motion } from "framer-motion";

interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
}

export const StaggerChildren = ({ children, staggerDelay = 0.1 }: StaggerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      {children}
    </motion.div>
  );
};
