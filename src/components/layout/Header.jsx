import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Main Header */}
      <header className="relative z-50 bg-[#313F38]">
        <div className="mx-auto flex h-[68px] w-full max-w-[1920px] items-center justify-between px-[10px] sm:px-[22px] lg:h-[92px] lg:px-[30px]">
          <Link
            to="/"
            aria-label="BankHotel homepage"
            className="relative z-50 shrink-0 text-[15px] font-semibold tracking-[-0.04em] text-[#FFFCF6] transition-colors duration-300 hover:text-[#FCD043] sm:text-[16px] lg:text-[17px]"
          >
            BankHotel
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[43px] xl:flex 2xl:gap-[61px]"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="group relative whitespace-nowrap text-[13px] font-medium tracking-[-0.03em] text-[#FFFCF6] transition-colors duration-300 hover:text-[#FCD043] 2xl:text-[14px]"
              >
                {item.label}

                <span className="absolute -bottom-[7px] left-0 h-px w-0 bg-[#FCD043] transition-[width] duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Phone */}
          <a
            href="tel:+380322975020"
            className="hidden whitespace-nowrap text-[14px] font-medium tracking-[-0.025em] transition-opacity duration-300 hover:opacity-70 xl:block 2xl:text-[15px]"
            style={{
              color: "",
            }}
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
            className="relative z-50 flex h-[36px] w-[36px] flex-col items-end justify-center gap-[6px] xl:hidden"
          >
            <span className="h-px w-[29px] bg-[#FFFCF6]" />
            <span className="h-px w-[29px] bg-[#FFFCF6]" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <aside
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[250] overflow-y-auto bg-[#313F38] transition-[opacity,transform] duration-500 ease-out xl:hidden ${
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-[100svh] flex-col px-[10px] pb-[22px] pt-[27px]">
          {/* Mobile Header */}
          <div className="flex items-start justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-semibold tracking-[-0.04em] text-[#FFFCF6]"
            >
              BankHotel
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              className="relative -mt-[4px] h-[34px] w-[34px]"
            >
              <span className="absolute left-1/2 top-1/2 h-px w-[30px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#FFFCF6]" />

              <span className="absolute left-1/2 top-1/2 h-px w-[30px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#FFFCF6]" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav
            aria-label="Mobile navigation"
            className="mt-[70px] flex flex-col items-start gap-[30px]"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-[13px] text-[18px] font-normal uppercase leading-none tracking-[-0.045em] text-[#FFFCF6] transition-colors duration-300 hover:text-[#FCD043] sm:text-[27px]"
              >
                <span>{item.label}</span>

                {index === 0 && (
                  <img
                    src={starIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-[30px] w-[30px] shrink-0 object-contain"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Information */}
          <div className="mt-auto pt-[95px]">
            <div className="text-center">
              <a
                href="tel:+380322975020"
                className="inline-block border-b pb-[3px] text-[18px] tracking-[-0.04em]"
                style={{
                  color: "#FCD043",
                  borderColor: "rgba(252, 208, 67, 0.55)",
                }}
              >
                +38 032 297 50 20
              </a>
            </div>

            <div className="mt-[38px] text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+Lystopadovoho+Chynu+Lviv"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] uppercase tracking-[-0.04em] text-[#FFFCF6]"
              >
                8 Lystopadovoho Chynu,Lviv
              </a>
            </div>

            {/* Social Links */}
            <div className="mx-auto mt-[43px] grid max-w-[270px] grid-cols-3 gap-[34px]">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="border-b border-white/25 pb-[7px] text-center text-[10px] font-medium uppercase transition-colors duration-300 hover:border-[#FCD043] hover:text-[#FCD043]"
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