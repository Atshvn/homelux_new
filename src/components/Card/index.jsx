import CardItem from "./cardItem";
import { motion } from "framer-motion";
import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
export default function Card() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div class="flex flex-wrap ">
        <div class="p-2  md:w-1/3 w-1/2">
          <img
            class=" object-cover shadow-md h-80 w-full"
            src="/PIC3NEW.jpg"
            alt="client photo"
          />
        </div>
        <div class="p-2  md:w-1/3 w-1/2">
          <img
            class=" object-cover shadow-md h-80 w-full"
            src="/PIC32.jpg"
            alt="client photo"
          />
        </div>
        <div class="p-2 lg:w-1/3 w-full">
          <img
            class=" object-cover shadow-md h-80 w-full"
            src="/PIC33.jpg"
            alt="client photo"
          />
        </div>
      </div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={bannerContainer}
        viewport={{ once: true }}
        className="text-center space-y-[18px] flex flex-col items-center pt-10"
      >
        <h1 class="sm:text-3xl text-2xl font-bold  title-font text-gray-900 mb-4 text-center">
          GIÁ GIAN HÀNG
        </h1>
      </motion.section>
      <div className="flex flex-col sm:flex-row gap-10  overflow-hidden lg:gap-10">
        <CardItem
          subtitle="Trong nhà, máy lạnh"
          subhead="Trong nhà, máy lạnh."
          paragraph="Build your dream business. Never worry about paying monthly fees or recurring payments again."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="Ngoài trời, không máy lạnh"
          subhead="Ngoài trời, không máy lạnh."
          paragraph="Sell your products online, and turn your social media accounts into marketing channels."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}
