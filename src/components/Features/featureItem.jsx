import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function FeatureItem({ feature, i }) {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.05 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={featureItem}
      viewport={{ amount: 0 }}
      className="flex flex-col border border-black-200 feature-item"
    >
      <Button style={"w-full h-full"}>{feature.title}</Button>
    </motion.section>
  );
}
