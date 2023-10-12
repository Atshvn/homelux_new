import { motion } from "framer-motion";
import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import CardImage from "./cardImages";

export default function CardItem({ subtitle, subhead, paragraph, primary }) {
  const cardContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <div className="flex flex-col gap-4 md:gap-4 md:flex-col sm:items-center w-full ">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={cardContent}
        className={` w-full`}
      >
        <Subtitle style="mb-2.5 text-xl text-center text-orange-600 italic font-semibold">
          {subtitle}
        </Subtitle>
        {/* <SubHead style="mb-[18px] sm:w-4/5 md:w-full">{subhead}</SubHead> */}
        {/* <Paragraph style="mb-[30px] w-4/5 sm:w-8/12 md:w-4/5 lg:w-8/12">
          {paragraph}
        </Paragraph>
        <Button>Buy Now</Button> */}
      </motion.section>
      <div className={`w-full flex justify-center`}>
        <CardImage primary={primary} />
      </div>
    </div>
  );
}
