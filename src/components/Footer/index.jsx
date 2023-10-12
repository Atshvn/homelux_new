import { motion } from "framer-motion";
import { GROUPID, callApi } from "../../services/Api";
import { useState, useRef } from "react";
import { message } from "antd";
export default function Footer() {
  const [messageApi, contextHolder] = message.useMessage();
  // thông tin khách hàng đăng nhập
  const infor = JSON.parse(
    localStorage.getItem("Web_Infor_Setting_CAK_" + GROUPID)
  );
  const [Names, setNames] = useState("");
  const NamesRef = useRef();
  const [Phones, setPhones] = useState("");
  const PhonesRef = useRef();
  const [Emails, setEmails] = useState("");
  const EmailsRef = useRef();
  const [Contents, setContents] = useState("");
  const ContentsRef = useRef();
  const Alter = (_type, _content) => {
    messageApi.open({
      type: _type,
      content: _content,
    });
  };
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  //#region tạo liên hệ
  const Shop_spContact_Save = async (a, key) => {
    if (Names.trim() === "") {
      NamesRef.current.focus();
      Alter("warning", "Vui lòng nhập tên!");
      return;
    }
    if (Emails.trim() === "") {
      EmailsRef.current.focus();
      Alter("warning", "Vui lòng nhập Emails!");
      return;
    }
    if (Phones.trim() === "") {
      PhonesRef.current.focus();
      Alter("warning", "Vui lòng nhập số điện thoại!");
      return;
    }
    if (Contents.trim() === "") {
      ContentsRef.current.focus();
      Alter("warning", "Vui lòng nhập nội dung!");
      return;
    }
    try {
      const pr = {
        Json: JSON.stringify({
          Names: Names,
          Phone: Phones,
          Email: Emails,
          Content: Contents,
          GroupId: GROUPID,
          KeySave: key,
        }),
        func: "Shop_spContact_Save",
        API_key: "netcoApikey2025",
      };
      const list = await callApi.Main(pr);
      if (list?.Status === "OK") {
        Alter("success", list?.Result);
        setContents("");
        setEmails("");
        setPhones("");
        setNames("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //#endregion
  return (
    <>
      {contextHolder}
      <div className="bg-orange-600" id="contact">
        {/* Contact */}
        <div className="border-b border-white/15 relative overflow-hidden">
          <div className="container mx-auto max-w-[1344px]">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={footerContent}
              className="px-4 py-0 md:py-10 my-0 flex flex-col items-center "
            >
              <div className=" md:w-5/6">
                <div class="lg:flex   bg-white">
                  <div class="lg:w-1/2 lg:mx-6 w-full mt-10 p-4 md:p-0">
                    <h1 class="text-2xl font-bold text-gray-800 capitalize  lg:text-3xl text-center">
                      THỦ TỤC ĐĂNG KÝ
                    </h1>

                    <div className=" py-8 mx-auto flex flex-wrap">
                      <div className="w-full">
                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                          Thủ tục đăng kí tham gia gian hàng hội chợ
                        </h1>

                        <ul class="max-w-md space-y-1 text-black-300 list-inside">
                          <li class="flex items-center">
                            <svg
                              class="w-3.5 h-3.5 mr-2 text-orange-600  flex-shrink-0"
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
                              class="w-3.5 h-3.5 mr-2 text-orange-600  flex-shrink-0"
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
                              class="w-3.5 h-3.5 mr-2 text-orange-600  flex-shrink-0"
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
                              class="w-3.5 h-3.5 mr-2 text-orange-600  flex-shrink-0"
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
                            <li>
                              Đợt 1: 30% giá trị hợp đồng ngay sau khi đăng ký.
                            </li>
                            <li>
                              Đợt 2: 30% tiếp theo trước ngày 01/ 12/2023.
                            </li>
                            <li>
                              Đợt 3: 40% còn lại ngay sau khi kết thúc hội chợ
                            </li>
                          </ol>
                        </ul>
                      </div>
                    </div>
                    <span class="text-xl font-semibold text-gray-800 capitalize border-b-2 border-orange-600">
                      {
                        infor?.find((a) => a.KeySetting === "CompanyName")
                          ?.DataSetting
                      }
                    </span>
                    <p class="flex items-start mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6  text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <span class=" pl-2 text-gray-900 w-full font-medium">
                        {
                          infor?.find((a) => a.KeySetting === "Address")
                            ?.DataSetting
                        }
                      </span>
                    </p>
                    <div class=" flex flex-row rounded-full bg-amber-500 mt-4 w-fit ">
                      <div class="flex-none p-3">
                        <span class="inline-block p-4 text-orange-600 rounded-full bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="flex flex-col grow justify-center text-white pl-3 pr-6">
                        <div className="text-3xl font-bold">
                          {
                            infor?.find((a) => a.KeySetting === "Hotline")
                              ?.DataSetting
                          }
                        </div>
                        <div class="font-semibold text-xl italic">
                          {
                            infor?.find((a) => a.KeySetting === "HotlineName")
                              ?.DataSetting
                          }
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-full  object-cover z-20 relative"
                      src="/cabin.jpg"
                      alt="shopify-icon"
                    />
                  </div>
                  <div class="mt-10 lg:w-1/2 lg:px-6 w-full p-4 md:p-0 mb-10 border-l border-slate-200">
                    <div class="w-full  mx-auto overflow-hidden bg-white ">
                      <form className="">
                        <h1 class="text-2xl font-bold text-gray-800 lg:text-3xl uppercase  text-center">
                          Liên hệ với chúng tôi
                        </h1>
                        <div class="flex-1 mt-6">
                          <label class="block mb-2 text-sm text-gray-600 ">
                            Họ và Tên
                          </label>
                          <input
                            type="text"
                            value={Names}
                            ref={NamesRef}
                            onChange={(a) => setNames(a.target.value)}
                            placeholder="Họ và Tên"
                            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:::placeholder-gray-600 dark:::bg-gray-900 dark:::text-gray-300 dark:::border-gray-700 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>

                        <div class="flex-1 mt-6">
                          <label class="block mb-2 text-sm text-gray-600 dark:::text-gray-200">
                            Email
                          </label>
                          <input
                            type="email"
                            value={Emails}
                            ref={EmailsRef}
                            onChange={(a) => setEmails(a.target.value)}
                            placeholder="Nguyen@example.com"
                            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:::placeholder-gray-600 dark:::bg-gray-900 dark:::text-gray-300 dark:::border-gray-700 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                        <div class="flex-1 mt-6">
                          <label class="block mb-2 text-sm text-gray-600 dark:::text-gray-200">
                            Số điện thoại
                          </label>
                          <input
                            type="number"
                            value={Phones}
                            ref={PhonesRef}
                            onChange={(a) => setPhones(a.target.value)}
                            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:::placeholder-gray-600 dark:::bg-gray-900 dark:::text-gray-300 dark:::border-gray-700 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                        <div class="w-full mt-6">
                          <label class="block mb-2 text-sm text-gray-600 dark:::text-gray-200">
                            Nội dung
                          </label>
                          <textarea
                            value={Contents}
                            ref={ContentsRef}
                            onChange={(a) => setContents(a.target.value)}
                            class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:::placeholder-gray-600 dark:::bg-gray-900 dark:::text-gray-300 dark:::border-gray-700 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-2">
                          <div className="">
                            <button
                              onClick={(a) => Shop_spContact_Save(a, 1)}
                              type="button"
                              class="inline-block w-full rounded bg-orange-600 px-6 py-4 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out  border border-orange-600 hover:bg-orange-700  focus:bg-orange-700"
                            >
                              Đăng ký gian hàng
                            </button>
                          </div>
                          <div className="">
                            <button
                              onClick={(a) => Shop_spContact_Save(a, 2)}
                              type="button"
                              class=" inline-block  w-full rounded bg-white  px-6 py-4 text-xs font-medium uppercase leading-normal text-orange-600 border border-orange-600  transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-orange-600 hover:text-white"
                            >
                              Đăng ký tham quan
                            </button>
                          </div>
                          {/* <button type="button" onClick={(a) => Shop_spContact_Save(a, 1)} class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-300 focus:outline-none focus:ring focus:border-orange-400 focus:ring-orange-400 focus:ring-opacity-50">
                            Đăng ký gian hàng ngay
                          </button>
                          <button type="button" onClick={(a) => Shop_spContact_Save(a, 2)} class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-300 focus:outline-none focus:ring focus:border-orange-400 focus:ring-orange-400 focus:ring-opacity-50 ml-4">
                            Đăng ký tham quan ngay
                          </button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Eclipse */}
          <motion.img
            initial="hidden"
            whileInView="visible"
            animate={{
              rotate: 360,
              transition: {
                duration: 15,
                repeat: "Infinity",
                ease: "easeInOut",
              },
            }}
            variants={footerImage}
            className="hidden lg:block absolute top-1/4 -left-28"
            src="/eclipse-1.svg"
            alt="eclipse"
          />
          <motion.img
            initial="hidden"
            whileInView="visible"
            animate={{
              rotate: 360,
              transition: {
                duration: 30,
                repeat: "Infinity",
                ease: "easeInOut",
              },
            }}
            variants={footerImage}
            className="hidden lg:block absolute top-[20%] -right-24"
            src="/eclipse-2.svg"
            alt="eclipse"
          />
        </div>
        {/* Footer */}
        <footer className="container mx-auto max-w-[1344px]">
          <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
            <div className="text-center lg:col-span-3 md:flex justify-between items-center">
              <div className="flex items-center justify-center gap-4 mb-4 order-2">
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    className="footer-icon"
                    src="/instagram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img className="footer-icon" src="/github.svg" alt="github" />
                </a>
                <a href="https://t.me/" target="_blank">
                  <img
                    className="footer-icon"
                    src="/telegram.svg"
                    alt="telegram"
                  />
                </a>
                <a href="https://www.linkedin.com/in" target="_blank">
                  <img
                    className="footer-icon"
                    src="/linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </div>
              <p className="font-body text-white font-medium order-1">
                © 2023 Homelux by{" "}
                <a
                  className="italic underline"
                  href="https://cak-solution.com/"
                  target="_blank"
                >
                  Cak Solution
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
