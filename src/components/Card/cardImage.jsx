import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CardProfileList from "./cardProfileList";

export function PrimaryCard({ primaryContainer, miniModal, fakeProfiles }) {
  const inDoor = [
    {
      id: 0,
      title: "Gian hàng tiêu chuẩn (2X3)",
      amount: "9.600.000 đ/ gian ",
    },
    {
      id: 1,
      title: "Gian hàng tiêu chuẩn (3X3)",
      amount: "14.400.000 đ/ gian",
      custome: false,
    },
    {
      id: 2,
      title: "Từ 18- 27 m2",
      amount: "1.116.000 đ/ m2",
      custome: true,
    },
    {
      id: 3,
      title: "Từ 36- 54 m2",
      amount: "765.000 đ/ m2",
      custome: true,
    },
    {
      id: 4,
      title: "Từ 63- 81 m2",
      amount: "612.000 đ/ m2 ",
      custome: true,
    },
    {
      id: 5,
      title: "Từ 100 m2 trở lên",
      amount: "495.000 đ/ m2",
      custome: true,
    },
  ];

  const cardProfile = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 * 1 },
  };
  return (
    <div
      className=" max-w-[380px] sm:max-w-[480px] w-full md:max-w-none  p-5 
    relative z-10 after:bg-orange-600 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0 sm:p-8 md:p-4 lg:p-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryContainer}
        className="relative z-10 bg-white px-3.5  sm:px-5 sm: py-5 text-sm
        md:px-6 md:py-5 flex flex-col gap-[18px] font-head lg:gap-[20px] primary-card"
      >
        <div className="border-b-[0.5px] md:border-b border-[#9C9C9C] pb-4">
          <div className="grid gap-3.5 overflow-hidden text-sm">
            <motion.div variants={cardProfile} className="">
              <span className="font-semibold">Gian hàng tiêu chuẩn</span>{" "}
            </motion.div>
            {inDoor
              .filter((item) => !item.custome)
              .map((profile) => (
                <motion.div
                  variants={cardProfile}
                  key={profile.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div>
                      <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-md lg:mb-0.5">
                        {profile.title}
                      </h5>
                      {/* <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                     {profile.phone}
                   </p> */}
                    </div>
                  </div>
                  <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-md">
                    {profile.amount}
                  </p>
                </motion.div>
              ))}
            <motion.div
              variants={cardProfile}
              className="flex items-center justify-between italic"
            >
              Đăng ký từ gian thứ 2 trở lên, mỗi gian giảm phí thuê 1 m2. <br />
              Đăng ký gian ở góc phải đăng ký tối thiểu 02 gian.
            </motion.div>
          </div>
        </div>
        <div className="grid gap-3.5 overflow-hidden">
          <motion.div variants={cardProfile} className="">
            <span className="font-semibold">Đất trống tự dựng</span>{" "}
            <i>(Đăng ký tối thiểu 18 m2)</i>
          </motion.div>
          {inDoor
            .filter((item) => item.custome)
            .map((profile) => (
              <motion.div
                variants={cardProfile}
                key={profile.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div>
                    <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-md lg:mb-0.5">
                      {profile.title}
                    </h5>
                    {/* <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                     {profile.phone}
                   </p> */}
                  </div>
                </div>
                <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-md">
                  {profile.amount}
                </p>
              </motion.div>
            ))}
        </div>
        <a
          href="#contact"
          className="py-2.5 bg-orange-600 text-center w-full text-white font-body font-medium text-[8px] sm:py-4 sm:text-xs lg:py-[22px] lg:text-base"
        >
          Thuê gian hàng ngay
        </a>
      </motion.div>
    </div>
  );
}

export function SecondaryCard({ primaryContainer }) {
  const outDoor = [
    {
      id: 0,
      title: "Gian hàng tiêu chuẩn (3X3)",
      amount: "12.800.000 đ/ gian  ",
      custome: false,
    },
    {
      id: 2,
      title: "Từ 18- 27 m2",
      amount: "850.000 đ/ m2 ",
      custome: true,
    },
    {
      id: 3,
      title: "Từ 36- 54 m2",
      amount: "680.000 đ/ m2 ",
      custome: true,
    },
    {
      id: 4,
      title: "Từ 63- 81 m2",
      amount: "550.000 đ/ m2  ",
      custome: true,
    },
    {
      id: 5,
      title: "Từ 100 m2 trở lên",
      amount: "440.000 đ/ m2 ",
      custome: true,
    },
  ];
  const cardProfile = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 * 1 },
  };

  return (
    <div
      className=" max-w-[380px] sm:max-w-[480px] sm:max-h-[680px]w-full md:max-w-none  p-5 
   relative z-10 after:bg-orange-600 0 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0 sm:p-8 md:p-4 lg:p-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryContainer}
        className="relative z-10 bg-white px-3.5  sm:px-5 sm: py-5 text-sm
       md:px-6 md:py-5 flex flex-col gap-[18px] font-head lg:gap-[20px] primary-card"
      >
        <div className="border-b-[0.5px] md:border-b border-[#9C9C9C] pb-4">
          <div className="grid gap-3.5 overflow-hidden text-sm">
            <motion.div variants={cardProfile} className="">
              <span className="font-semibold">Gian hàng tiêu chuẩn</span>{" "}
            </motion.div>
            {outDoor
              .filter((item) => !item.custome)
              .map((profile) => (
                <motion.div
                  variants={cardProfile}
                  key={profile.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div>
                      <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-md lg:mb-0.5">
                        {profile.title}
                      </h5>
                      {/* <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                    {profile.phone}
                  </p> */}
                    </div>
                  </div>
                  <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-md">
                    {profile.amount}
                  </p>
                </motion.div>
              ))}
            <motion.div
              variants={cardProfile}
              className="flex items-center justify-between italic"
            >
              Đăng ký từ gian thứ 2 trở lên, mỗi gian giảm phí thuê 1 m2. <br />
              Đăng ký gian ở góc phải đăng ký tối thiểu 02 gian.
            </motion.div>
          </div>
        </div>
        <div className="grid gap-3.5 overflow-hidden">
          <motion.div variants={cardProfile} className="">
            <span className="font-semibold">Đất trống tự dựng</span>{" "}
            <i>(Đăng ký tối thiểu 18 m2)</i>
          </motion.div>
          {outDoor
            .filter((item) => item.custome)
            .map((profile) => (
              <motion.div
                variants={cardProfile}
                key={profile.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div>
                    <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-md lg:mb-0.5">
                      {profile.title}
                    </h5>
                    {/* <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                    {profile.phone}
                  </p> */}
                  </div>
                </div>
                <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-md">
                  {profile.amount}
                </p>
              </motion.div>
            ))}
        </div>
        <a
          href="#contact"
          className="py-2.5 bg-orange-600 w-full  text-center text-white font-body font-medium text-[8px] sm:py-4 sm:text-xs lg:py-[22px] lg:text-base"
        >
          Thuê gian hàng ngay
        </a>
      </motion.div>
    </div>
  );
}
