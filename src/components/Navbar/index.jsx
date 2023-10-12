import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { GROUPID, IMAGES_DOMAIN, callApi } from "../../services/Api";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [logo, setLogo] = useState();
  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  useEffect(() => {
    Shop_spWeb_Setting_List();
  }, []);

  const Shop_spWeb_Setting_List = async () => {
    const pr2 = {
      Domain: "",
      GroupId: GROUPID,
    };
    const params2 = {
      Json: JSON.stringify(pr2),
      func: "Shop_spWeb_Setting_List",
    };
    try {
      const result2 = await callApi.Main(params2);
      let Logo =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Logo")
          .DataSetting.replace(",", "");

      let Hotline = result2.find(
        (e) => e.KeySetting === "Hotline"
      )?.DataSetting;
      let Email = result2.find((e) => e.KeySetting === "Email")?.DataSetting;
      let Slogan = result2.find((e) => e.KeySetting === "Slogan")?.DataSetting;

      let data = {
        Logo,
        Email,
        Slogan,
        Hotline,
      };
      setLogo(Logo);
      localStorage.setItem(
        "Web_Infor_Setting_CAK_" + GROUPID,
        JSON.stringify(result2)
      );

      localStorage.setItem("data", JSON.stringify(data));
    } catch (err) {}
  };

  return (
    <header className="  w-full  z-[1000000000] h-full">
      <nav className="bg-orange-600  h-full w-full z-[1000000000] ">
        <div className="container h-full mx-auto max-w-[1344px]">
          <div className="h-full  flex flex-col items-center justify-center z-20 bg-orange-600 relative gap-4">
            {/* Icon */}
            <div className="bg-white p-3 rounded m-8">
              <img
                className="w-[124px]  object-cover z-20 relative"
                src={logo}
                alt="shopify-icon"
              />
            </div>
            <div className="bg-amber-500 p-3 px-5 rounded-full text-white text-lg md:text-3xl font-semibold">
              HỘI CHỢ GIA DỤNG - NỘI THẤT HCM
            </div>

            <div className=" p-3 px-5  text-white text-[40px] lg:text-[72px] lg:w-[700px] font-bold text-center lg:leading-[90px]">
              ÁO KHOÁC MỚI CHO NHÀ DỊP TẾT
            </div>

            <div class="flex items-center">
              <div class=" border-t border-b border-gray-300 h-0 w-10 md:w-40"></div>
              <div className=" p-3 px-5 rounded-full text-white text-lg  md:text-3xl font-bold text-center w-fit">
                HCMC HOMELUX 2023
              </div>
              <div class=" border-t border-b border-gray-300 h-0 w-10 md:w-40"></div>
            </div>
            {/* 
            <div
              onClick={handleOpen}
              className={`${
                isOpen ? "open" : ""
              } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
            >
              <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
              <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
              <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            </div>

            <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
              <a href="#" className="navlink active-navlink">
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="navlink">
                Giới thiệu
              </a>
              <a href="#gia" className="navlink">
                Giá
              </a>
              <a href="#lien-he" className="navlink">
                Liên hệ
              </a>
              <a href="#dang-ky-gian-hang" className="navlink">
                Đăng ký gian hàng
              </a>
            </div> */}
          </div>

          {/* Navbar Menu (Mobile) */}
          {/* <NavbarDropdown isOpen={isOpen} /> */}
        </div>
      </nav>
    </header>
  );
}
