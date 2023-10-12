import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  MessageOutlined,
  ShopOutlined,
  ClockCircleOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Vải sợi gia dụng",
      logo: "/feature-1.svg",
      content:
        "Check out our best practices and support to quickly make text messaging one of your top 3 revenue channels.",
    },
    {
      id: 2,
      title: "Đồ gỗ nội, ngoại thất",
      logo: "/feature-2.svg",
      content:
        "You own your data, store design and business plan, but you are free to use the software platform and resources provided by Shopify.",
    },
    {
      id: 3,
      title: "Đồ dùng nhà bếp",
      logo: "/feature-3.svg",
      content:
        "Shopify is so dedicated to keeping its software current that it sends you free updates for a lifetime without charging you anything.",
    },
    {
      id: 4,
      title: "Điện máy gia dụng",
      logo: "/feature-4.svg",
      content:
        "With our mobile app, you can allow your customers to check their order status, browse your store and create an account on the spot.",
    },
    {
      id: 5,
      title: "Thiết bị vệ sinh, phòng tắm",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 6,
      title: "Chất tẩy rửa, vệ sinh môi trường",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 7,
      title: "Thiết bị ánh sáng & trang trí",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 8,
      title: " Dụng cụ cầm tay",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 9,
      title: "Dụng cụ thể dục, sức khoẻ",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 10,
      title: "Thủ công mỹ nghệ & Quà tặng",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 11,
      title: "Gồm sứ, thủy tinh, nhôm, nhựa",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 12,
      title: "Làm vườn & sinh vật cảnh",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 13,
      title: "Đồ dùng cho Mẹ & Bé",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 14,
      title: "Thiết bị y tế gia đình",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 15,
      title: "Đồ thờ cúng, tâm linh & phong thuỷ",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: -100, opacity: 0 },
  };

  const statsItem = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.05 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <section class="bg-white  mt-10">
        <div class="container h-full mx-auto max-w-[1344px]  z-50">
          <div className="flex flex-col md:flex-row justify-center">
            <div>
              <div className="bg-orange-600 w-full md:w-[600px]">
                <div className="p-10  text-white  text-center">
                  <div className=" text-center w-full font-bold mb-4">
                    GIA DỤNG NỘI THẤT CHÍNH HÃNG GIÁ RẺ
                  </div>
                  <div className=" text-center w-full pb-10 border-b border-white">
                    Nâng cấp phòng khách, đặc cách phòng ăn, vinh thăng phòng
                    ngủ, bao phủ phòng bếp, xịn sang nề nếp -{" "}
                    <b>Chuẩn gu ăn Tết.</b>
                  </div>
                  <div className="pt-5 text-2xl font-bold">
                    Từ <span className="text-3xl">21.12</span> Đến{" "}
                    <span className="text-3xl">25.12.2023</span>
                  </div>
                  <div className="font-bold">
                    Nhà thi đấu Phú Thọ, Quận 11, TPHCM
                  </div>
                </div>
              </div>
              <div className="pt-10 pb-5 flex flex-col gap-1 px-4 md:px-0">
                <div className="">
                  Đơn vị <span className="font-medium">TỔ CHỨC</span>:{" "}
                  <span className="text-amber-500 font-bold">
                    Công ty TNHH Dịch Vụ Quảng Cáo Kim Minh
                  </span>
                </div>
                <div>
                  Đơn vị <span className="font-medium">BẢO TRỢ</span>:{" "}
                  <span className="text-amber-500 font-bold">
                    Hội bảo vệ quyền lợi Người tiêu dùng TPHCM
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                class="h-auto  object-cove md:-ml-10 "
                src="/homelux_banner2.png"
                alt="client photo"
              />
            </div>
          </div>
        </div>
        <div class="  bg-orange-600 ">
          <main class="md:relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12 container h-full mx-auto max-w-[1344px]">
            <div class="w-full p-6 md:flex   md:p-0 lg:px-12 md:justify-evenly">
              <div class="mt-2   py-10 md:!mr-[430px] ">
                <p class=" text-lg leading-relaxed text-white md:text-xl italic text-justify mt-0">
                  {" "}
                  Nhằm giúp người dùng bắt kịp xu hướng mới, hiện đại trong tiêu
                  dùng hàng gia dụng & nội thất; đồng thời đáp ứng nhu cầu tân
                  trang nhà cửa đón Tết của người dân.
                </p>
                <p class="mt-4 text-lg leading-relaxed text-white md:text-xl italic text-justify">
                  {" "}
                  Từ những món đồ tạo “gu” cho tổ ấm như tủ, giường, bàn ghế,
                  sofa, kệ bếp… đến những chi tiết tạo điểm nhấn: tranh vẽ, cây
                  cảnh, đèn, thảm, màn, rèm… cùng với khu mô phỏng chân thực các
                  phong cách sống, HCMC HomeLux được kỳ vọng là sự kiện thương
                  mại thường niên được chú ý bởi người tiêu dùng mỗi độ Tết đến,
                  Xuân về. Dành cho những ai yêu thích không ngừng tổ chức và
                  hoàn thiện không gian sống của mình.
                </p>
              </div>
              <img
                class="h-auto w-[400px] top-14 right-14 object-cover  md:absolute"
                src="/homelux_banner4.jpg"
                alt="client photo"
              />
            </div>
          </main>
        </div>
      </section>
      <section class="text-gray-600 body-font mt-10 md:mt-20 container h-full mx-auto max-w-[1344px]">
        <div class="container px-6 mx-auto">
          <div class="text-center">
            <h1 class="sm:text-3xl text-2xl font-bold  title-font text-gray-900 mb-4 text-center">
              MẶT HÀNG TRƯNG BÀY
            </h1>
          </div>
          <div class="flex flex-wrap -m-3">
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Chăn, drap, gối, nệm, vải sợi gia dụng
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Thiết bị, đồ dùng nhà bếp
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Đồ gỗ trang trí nội, ngoại thất
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Điện máy gia dụng
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Thiết bị vệ sinh, phòng tắm
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Chất tẩy rửa, vệ sinh môi trường
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Thiết bị ánh sáng & trang trí
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Dụng cụ cầm tay
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Dụng cụ thể dục, sức khoẻ
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Thủ công mỹ nghệ & tranh
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Gồm sứ, thủy tinh, nhôm, nhựa
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Sinh vật cảnh & hoa
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Đồ dùng Mẹ & Bé
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Thiết bị y tế gia đình
                </a>
                <a>
                  <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Đồ thờ cúng, tâm linh & phong thuỷ
                </a>
              </nav>
            </div>
          </div>
          <div class="flex flex-wrap -m-3 mt-6">
            <div class="p-2 md:w-1/3 w-1/2  ">
              <img
                class=" object-cover shadow-md h-80"
                src="/PIC331.jpg"
                alt="client photo"
              />
            </div>
            <div class="p-2  md:w-1/3 w-1/2 ">
              <img
                class=" object-cover shadow-md h-80"
                src="/PIC332.jpg"
                alt="client photo"
              />
            </div>
            <div class="p-2 md:w-1/3 w-full">
              <img
                class=" object-cover shadow-md h-80"
                src="/phongngu2.jpg"
                alt="client photo"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="text-gray-600 body-font bg-white mb-32">
        <section className="container mx-auto max-w-[1344px]">
          <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-full  content-start ">
              <div className="w-full sm:p-4 px-4 mt-4 !pb-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={content}
                  className=" flex flex-col items-center"
                >
                  <div class="text-start">
                    <h1 class="sm:text-3xl text-2xl font-bold text-start title-font text-gray-900 mb-4">
                      QUY MÔ
                    </h1>
                  </div>
                </motion.div>
              </div>
              <div className=" sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  {" "}
                  <dd class="text-4xl font-extrabold text-orange-500 md:text-5xl">
                    <ShopOutlined />
                  </dd>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    150
                  </h2>
                  <p className="leading-relaxed">Nhà triển lãm</p>
                </motion.section>
              </div>
              <div className=" sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  <dd class="text-4xl font-extrabold text-orange-500 md:text-5xl">
                    {" "}
                    <HomeOutlined />
                  </dd>

                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    500
                  </h2>
                  <p className="leading-relaxed">Gian hàng</p>
                </motion.section>
              </div>
              <div className=" sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  {" "}
                  <dd class="text-4xl font-extrabold text-orange-500 md:text-5xl">
                    <AppstoreAddOutlined />
                  </dd>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    10.000
                  </h2>
                  <p className="leading-relaxed">Sản phẩm trưng bày</p>
                </motion.section>
              </div>
              <div className=" sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  {" "}
                  <dd class="text-4xl font-extrabold text-orange-500 md:text-5xl">
                    <MessageOutlined />
                  </dd>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    20.000
                  </h2>
                  <p className="leading-relaxed">Khách tham quan</p>
                </motion.section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-full   mt-16  shadow-lg bg-orange-600 my-8 pb-8">
        <div class="flex justify-center -mt-14 ">
          <div class="object-cover w-{88px} h-16 border-2 bg-orange-600 rounded-full p-4 text-white break-normal mt-[-35px]">
            <div class="flex flex-wrap m-[-8px]">
              <div className="w-1/1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white break-normal"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M12 10l0 3l2 0" />
                  <path d="M7 4l-2.75 2" />
                  <path d="M17 4l2.75 2" />
                </svg>
              </div>
              <div className="font-bold text-xl text-white w-2/2 sm:items-start mt-2">
                Mở cửa: 8:30-18:30
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto max-w-[1344px] px-4 md:px-0 mt-5">
          <div class="text-start">
            <h1 class="sm:text-3xl text-2xl font-medium text-start title-font text-white mb-4 ">
              HOẠT ĐỘNG
            </h1>
          </div>
          <div class="flex flex-wrap -m-3 text-white">
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full ">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex justify-center"></span>
                  Trưng bày & bán sản phẩm
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex  justify-center"></span>
                  Giới thiệu, ra mắt sản phẩm mới
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Biểu diễn, minh hoạ sản phẩm
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Quảng bá thương hiệu
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Tìm đại lý
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Khuyến mãi kích cầu
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Ký kết hợp đồng tiêu thụ
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Tìm kiếm thị trường xuất khẩu
                </a>
                <a>
                  <span class="bg-white mt-4 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                  Khảo sát thị trường & tâm lý, thị hiếu người dùng
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
