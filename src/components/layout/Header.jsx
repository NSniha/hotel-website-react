import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import starIcon from "../../assets/icons/star.svg";

const navigation = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "ROOMS", path: "/rooms" },
  { label: "RESTAURANT", path: "/restaurant" },
  { label: "CONFERENCE HALL", path: "/conference-hall" },
  { label: "CONTACTS", path: "/contacts" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="relative z-50 bg-[#2f433a]">
        <div className="mx-auto flex h-[76px] w-full max-w-[1920px] items-center justify-between px-[10px] sm:px-[22px] lg:h-[96px] lg:px-[30px]">
          <Link
            to="/"
            aria-label="BankHotel homepage"
            className="relative z-50 shrink-0 text-[16px] font-semibold tracking-[-0.035em] text-[#f7f5ef] transition-colors duration-300 hover:text-[#f8cd42] lg:text-[17px] 2xl:text-[18px]"
          >
            BankHotel
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[44px] xl:flex 2xl:gap-[62px]"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="group relative whitespace-nowrap text-[13px] font-medium tracking-[-0.025em] text-[#f5f3ed] transition-colors duration-300 hover:text-[#f8cd42] 2xl:text-[14px]"
              >
                {item.label}

                <span className="absolute -bottom-[8px] left-0 h-px w-0 bg-[#f8cd42] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <a
            href="tel:+380322975020"
            className="hidden whitespace-nowrap text-[14px] font-medium tracking-[-0.02em] text-[#f5f3ed] transition-colors duration-300 hover:text-[#f8cd42] xl:block 2xl:text-[15px]"
          >
            +38 032 297 50 20
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
            className="relative z-50 flex h-[42px] w-[42px] flex-col items-center justify-center gap-[7px] xl:hidden"
          >
            <span className="h-px w-[36px] bg-[#f5f3ed]" />
            <span className="h-px w-[36px] bg-[#f5f3ed]" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <aside
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[100] overflow-y-auto bg-[#2f433a] transition-[opacity,transform] duration-500 ease-out xl:hidden ${
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-[100svh] flex-col px-[10px] pb-[22px] pt-[25px]">
          {/* Mobile Menu Header */}
          <div className="flex items-start justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-semibold tracking-[-0.04em] text-[#f5f3ed]"
            >
              BankHotel
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              className="relative h-[34px] w-[34px]"
            >
              <span className="absolute left-1/2 top-1/2 h-px w-[40px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#f5f3ed]" />

              <span className="absolute left-1/2 top-1/2 h-px w-[40px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#f5f3ed]" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav
            aria-label="Mobile navigation"
            className="mt-[70px] flex flex-col items-start gap-[32px]"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-[14px] text-[29px] font-normal uppercase leading-none tracking-[-0.045em] text-[#f5f3ed] transition-colors duration-300 hover:text-[#f8cd42]"
              >
                <span>{item.label}</span>

                {index === 0 && (
                  <img
                    src={starIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-[36px] w-[36px] object-contain"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Information */}
          <div className="mt-auto pt-[90px]">
            <div className="flex justify-center">
              <a
                href="tel:+380322975020"
                className="border-b border-white/30 pb-[3px] text-[20px] tracking-[-0.035em] text-[#f5f3ed]"
              >
                +38 032 297 50 20
              </a>
            </div>

            <div className="mt-[42px] text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+Lystopadovoho+Chynu+Lviv"
                target="_blank"
                rel="noreferrer"
                className="text-[16px] uppercase tracking-[-0.035em] text-[#f5f3ed]"
              >
                8 Lystopadovoho Chynu,Lviv
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="mt-[47px] grid grid-cols-3 gap-[24px] px-[42px]">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="border-b border-white/25 pb-[7px] text-center text-[11px] font-medium uppercase transition-colors duration-300 hover:border-[#f8cd42] hover:text-[#f8cd42]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;