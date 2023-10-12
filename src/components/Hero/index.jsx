import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import MainButton from "../Atoms/button";

export default function Hero() {
  const priceRef = useRef(null);
  const isInView = useInView(priceRef);

  return (
    <div className=" bg-cover w-full h-full ">
      {/* container mx-auto max-w-[1344px] */}

      <div>
        <div className="relative">
          <img
            className="w-full  object-cover z-20 relative"
            src="/homelux_banner00.jpg"
            alt="shopify-icon"
          />
          <div
            className="absolute top-4 md:top-14 border-2 border-orange-600 text-orange-600 p-3
           italic font-bold left-1/2 transform -translate-x-1/2 z-30 text-lg md:text-2xl w-[300px] md:w-[500px]"
          >
            NHÀ LÀ NƠI TẬN HƯỞNG CUỘC SỐNG VÀ TẠO RA NHỮNG KỶ NIỆM....
          </div>
        </div>
      </div>
    </div>
  );
}
