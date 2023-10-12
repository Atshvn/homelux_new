import { useRef } from "react";
import { motion } from "framer-motion";
import SubHead from "../Atoms/subhead";
export default function Some() {
  return (
    <div className="bg-tertiary-300">
      {/* <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-[18px] flex flex-col items-center"
          >
            <SubHead style="sm:w-4/5 md:w-9/12 lg:w-9/12">
              Thủ tục đăng kí
            </SubHead>
          </section>
          <section
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 body-font"
          >
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                    Thủ tục đăng kí tham gia gian hàng hội chợ
                  </h1>

                  <ul class="max-w-md space-y-1 text-black-300 list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Gửi phiếu đăng ký về BTC: Bắt đầu từ 01/10/2023
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Đăng ký trước 15/10/2023 được giảm 10%.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Đăng ký trước, chọn vị trí trước
                    </li>
                    <li class="flex items-center ">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Thanh toán:
                    </li>
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Đợt 1: 30% giá trị hợp đồng ngay sau khi đăng ký.</li>
                      <li>Đợt 2: 30% tiếp theo trước ngày 01/ 12/2023.</li>
                      <li>Đợt 3: 40% còn lại ngay sau khi kết thúc hội chợ</li>
                    </ol>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img
                  className="object-cover object-center w-full h-full"
                  src="/banner2.jpg"
                  alt="stats"
                />
              </div>
            </div>
          </section>
        </div>
      </div> */}

      <div class="container mx-auto max-w-[1344px]  py-10">
        <div class="text-start   px-4 md:px-0">
          <h1 class="sm:text-3xl text-xl font-bold text-start title-font text-gray-900 mb-4">
            CỔ ĐỘNG KHÁCH THAM QUAN
          </h1>
        </div>
        <div class="flex flex-wrap text-start px-4 md:px-0">
          <h1 class="text-2xl font-semibold text-start title-font text-gray-900">
            {" "}
            Online
          </h1>
        </div>
        <div class="flex flex-wrap  px-4 md:px-0">
          <div class="p-1 lg:w-1/5 sm:w-1/2 w-full">
            <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                FaceBook Ads
              </a>
            </nav>
          </div>
          <div class="p-1 lg:w-1/5 sm:w-1/2 w-full">
            <nav class="flex flex-col sm:items-start sm:text-left  -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Google Search
              </a>
            </nav>
          </div>{" "}
          <div class="p-1 lg:w-1/5 sm:w-1/2 w-full">
            <nav class="flex flex-col sm:items-start sm:text-left  -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Google GDN
              </a>
            </nav>
          </div>{" "}
          <div class="p-1 lg:w-1/5 sm:w-1/2 w-full">
            <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                YouTube Ads
              </a>
            </nav>
          </div>{" "}
          <div class="p-1 lg:w-1/5 sm:w-1/2 w-full">
            <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                TikTok Video
              </a>
            </nav>
          </div>
        </div>
        <div class="flex flex-wrap text-start  px-4 md:px-0">
          <h1 class="text-2xl font-semibold text-start title-font text-gray-900 mt-5">
            {" "}
            Offline
          </h1>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="lg:w-1/2 sm:w-1/2 w-full   px-4 md:px-0">
            <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                TVC ở Trung tâm thương mại & Toà nhà văn phòng.
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Frame Ads: Quảng cáo trên các màn hình chung cư cao cấp
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Billboard,
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                200 băng-rôn, 1000 cờ phướn (các tuyến đường trọng yếu)
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Nhắn tin SMS
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Hiển thị Banner trên các trang báo điện tử: Soha News, CafeF,
                Kênh 14, 24h.
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Bài viết trên các báo điện tử: VnExpress, Thanh Niên, Tuổi Trẻ
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Bài viết trên các tạp chí: Furniture World, Nội thất, Kiến trúc
                & Đời sống.
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                Đưa tin về sự kiện trên HTV7, BDTV, ĐNRTV
              </a>
              <a>
                <span class="bg-orange-500 mt-4 text-indigo-500 w-2 h-2 mr-2 rounded-none inline-flex items-center justify-center"></span>
                500 quà tặng cho 500 khách đăng ký tham quan đầu tiên. Xổ số may
                mắn dành cho những ai tham gia bình chọn “Sản phẩm gia dụng- nội
                thất được ưa thích” trúng thưởng đặc biệt xe máy Honda Vision.
              </a>
            </nav>
          </div>
          <div class="lg:w-1/2 sm:w-1/2 w-full   px-4 md:px-0">
            <img
              className="object-cover object-center w-full h-[430px]"
              src="/phongngu1.jpg"
              alt="stats"
            />
          </div>
        </div>
      </div>
      <div class="container mx-auto max-w-[1344px]  ">
        <div class="grid grid-cols-2 gap-4   px-4 md:px-0">
          <div class=" ">
            <img
              class=" object-cover shadow-md  w-full h-80"
              src="/PIC51.jpg"
              alt="client photo"
            />
          </div>
          <div class="">
            <img
              class=" object-cover shadow-md  w-full h-80"
              src="/PIC52.jpg"
              alt="client photo"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 my-4   px-4 md:px-0">
          <div class="">
            <img
              class=" object-cover shadow-md h-80 w-full"
              src="/PIC53.jpg"
              alt="client photo"
            />
          </div>
          <div class="">
            <img
              class=" object-cover shadow-md h-80 w-full"
              src="/PIC54.jpg"
              alt="client photo"
            />
          </div>
          <div class="">
            <img
              class=" object-cover shadow-md h-80 w-full"
              src="/SOFA.jpg"
              alt="client photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
