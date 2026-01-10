import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="icon-wrapper">
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};
