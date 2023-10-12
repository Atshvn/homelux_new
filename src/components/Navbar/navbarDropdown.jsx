export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-black-200">
          <a className="w-fit" href="#">
            <p className="navlink active-navlink">Trang chủ</p>
          </a>
          <a className="w-fit" href="#gioi-thieu">
            <p className="navlink">Giới thiệu</p>
          </a>
          <a className="w-fit" href="#gia">
            <p className="navlink">Giá</p>
          </a>
          <a className="w-fit" href="#lien-he">
            <p className="navlink">Liên hệ</p>
          </a>
          <a className="w-fit" href="#dang-ky-gian-hang">
            <p className="navlink">Đăng ký gian hàng</p>
          </a>
        </div>
        {/* <div className="flex flex-col gap-8">
          <a href="#">
            <p className="underline text-black-100 py-3.5 border border-black-100">
              Login
            </p>
          </a>
          <a href="#">
            <button className="py-3.5 border border-primary-100 w-full text-white bg-primary-100 font-medium">
              Start Free
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}
