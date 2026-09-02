import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Header from "../../components/layout/Header.jsx";

import bankHotelLogo from "../../assets/logos/bank-hotel-logo.svg";
import heroRoom from "../../assets/images/home/hero-room.png";
import starIcon from "../../assets/icons/star.svg";

const BODY_FONT = '"Manrope", Arial, Helvetica, sans-serif';
const HEADING_FONT =
  '"Cormorant Garamond", Georgia, "Times New Roman", serif';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const formatDate = (date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
};

/* Brand Logo */
const BrandLogo = () => {
  return (
    <div className="relative mx-auto w-full max-w-[355px] sm:max-w-[620px] lg:mx-0 lg:max-w-[940px]">
      <img
        src={bankHotelLogo}
        alt="BankHotel"
        className="block h-auto w-full"
      />

      {/* Yellow Hotel Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          clipPath: "inset(0 0 0 49.5%)",
        }}
      >
        <img
          src={bankHotelLogo}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-left"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(85%) sepia(87%) saturate(1193%) hue-rotate(326deg) brightness(103%) contrast(98%)",
          }}
        />
      </div>
    </div>
  );
};

/* Booking Calendar */
const Calendar = ({
  title,
  selectedDate,
  minimumDate,
  onSelect,
  onClose,
}) => {
  const initialDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : minimumDate
      ? new Date(`${minimumDate}T00:00:00`)
      : new Date();

  const [visibleMonth, setVisibleMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );

  const days = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const finalDay = new Date(year, month + 1, 0);

    const offset = (firstDay.getDay() + 6) % 7;
    const calendar = [];

    for (let index = 0; index < offset; index += 1) {
      calendar.push(null);
    }

    for (let day = 1; day <= finalDay.getDate(); day += 1) {
      calendar.push(new Date(year, month, day));
    }

    return calendar;
  }, [visibleMonth]);

  const previousMonth = () => {
    setVisibleMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setVisibleMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + 1, 1),
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 8,
        scale: 0.98,
      }}
      transition={{
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full max-w-[390px] border border-white/15 bg-[#394B42] p-[22px] shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:w-[390px]"
      style={{
        fontFamily: BODY_FONT,
      }}
    >
      {/* Calendar Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FCD043]">
            {title}
          </span>

          <h3 className="mt-[6px] text-[17px] font-medium leading-none text-[#FFFCF6]" style={{
            fontFamily: BODY_FONT,
          }}>
            {months[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close calendar"
          className="flex h-[36px] w-[36px] items-center justify-center border border-white/15 text-[19px] font-light text-white/65 transition-colors duration-300 hover:border-[#FCD043] hover:text-[#FCD043]"
        >
          ×
        </button>
      </div>

      {/* Month Navigation */}
      <div className="mt-[22px] flex items-center justify-between">
        <button
          type="button"
          onClick={previousMonth}
          aria-label="Previous month"
          className="flex h-[36px] w-[36px] items-center justify-center border border-white/15 text-[15px] text-white/70 transition-colors duration-300 hover:border-[#FCD043] hover:text-[#FCD043]"
        >
          ←
        </button>

        <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/45">
          Select date
        </span>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="flex h-[36px] w-[36px] items-center justify-center border border-white/15 text-[15px] text-white/70 transition-colors duration-300 hover:border-[#FCD043] hover:text-[#FCD043]"
        >
          →
        </button>
      </div>

      {/* Week Days */}
      <div className="mt-[20px] grid grid-cols-7 gap-[4px]">
        {weekDays.map((day) => (
          <span
            key={day}
            className="flex h-[30px] items-center justify-center text-[9px] font-semibold tracking-[0.06em] text-white/35"
          >
            {day}
          </span>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-[4px]">
        {days.map((date, index) => {
          if (!date) {
            return <span key={`empty-${index}`} className="h-[42px]" />;
          }

          const dateKey = getDateKey(date);
          const disabled = minimumDate && dateKey < minimumDate;
          const selected = selectedDate === dateKey;

          return (
            <button
              key={dateKey}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(dateKey)}
              className={`flex h-[42px] items-center justify-center text-[12px] font-medium transition-all duration-200 ${
                selected
                  ? "bg-[#FCD043] text-[#24352D]"
                  : disabled
                    ? "cursor-not-allowed text-white/15"
                    : "text-[#FFFCF6] hover:bg-white/10 hover:text-[#FCD043]"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [activeCalendar, setActiveCalendar] = useState(null);
  const [mobileBookingOpen, setMobileBookingOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const today = useMemo(() => getDateKey(new Date()), []);

  useEffect(() => {
    if (checkIn && checkOut && checkOut <= checkIn) {
      setCheckOut("");
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    const locked = mobileBookingOpen || confirmationOpen;

    document.body.style.overflow = locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileBookingOpen, confirmationOpen]);

  const handleCheckIn = (date) => {
    setCheckIn(date);

    if (checkOut && checkOut <= date) {
      setCheckOut("");
    }

    setActiveCalendar("checkOut");
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setActiveCalendar(null);
  };

  const handleBooking = () => {
    if (!checkIn) {
      setActiveCalendar("checkIn");
      return;
    }

    if (!checkOut) {
      setActiveCalendar("checkOut");
      return;
    }

    setActiveCalendar(null);
    setMobileBookingOpen(false);
    setConfirmationOpen(true);
  };

  const openMobileBooking = () => {
    setMobileBookingOpen(true);
    setActiveCalendar(checkIn ? "checkOut" : "checkIn");
  };

  const closeMobileBooking = () => {
    setMobileBookingOpen(false);
    setActiveCalendar(null);
  };

  const scrollToHotel = () => {
    document
      .getElementById("hotel-preview")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#313F38] text-[#FFFCF6]">
      {/* Homepage Hero */}
      <section
        id="home"
        className="relative min-h-screen bg-[#313F38] pb-[31px] sm:pb-[36px] lg:pb-[46px]"
        aria-labelledby="home-title"
      >
        <Header />

        <div className="mx-auto w-full max-w-[1920px] px-[10px] sm:px-[22px] lg:px-[30px]">
          {/* Hero Introduction */}
          <div className="relative pt-[13px] sm:pt-[28px] lg:pt-[42px]">
            <div className="grid gap-[45px] xl:grid-cols-[minmax(0,1.66fr)_minmax(310px,0.56fr)] xl:gap-[88px]">
              {/* Hero Branding */}
              <div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h1 id="home-title" className="sr-only">
                    BankHotel
                  </h1>

                  <BrandLogo />
                </motion.div>

                {/* Categories */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pt-[25px] whitespace-nowrap text-center text-[10px] font-semibold uppercase leading-none tracking-[-0.04em] text-[#FCD043] min-[370px]:text-[11px] sm:text-[14px] lg:pt-[25px] lg:text-left lg:text-[17px]"
                >
                  Rooms // Restaurant // Congress Hall // Wine Bar
                </motion.p>

                {/* Mobile Divider */}
                <div className="mx-auto mt-[26px] h-px w-[172px] bg-white/10 lg:hidden" />
              </div>

              {/* Desktop Right Information */}
              <div className="relative hidden min-h-[222px] xl:block">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start justify-between gap-[35px]"
                >
                  {/* Since Badge */}
                  <div className="flex h-[54px] min-w-[188px] items-center rounded-full border border-white/25 px-[22px]">
                    <img
                      src={starIcon}
                      alt=""
                      aria-hidden="true"
                      className="mr-[15px] h-[25px] w-[25px] shrink-0"
                    />

                    <span className="whitespace-nowrap text-[15px] font-normal tracking-[-0.025em] text-[#FFFCF6]">
                      Since 1973
                    </span>
                  </div>

                  {/* Scroll Control */}
                  <button
                    type="button"
                    onClick={scrollToHotel}
                    aria-label="Scroll to hotel room"
                    className="group relative flex h-[52px] w-[52px] shrink-0 items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 52 52"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full text-white/25 transition-colors duration-300 group-hover:text-[#FCD043]"
                    >
                      <path
                        d="M26 1.5L42.7 8.4L50.5 26L42.7 43.6L26 50.5L9.3 43.6L1.5 26L9.3 8.4L26 1.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="relative h-[16px] w-[16px] text-[#FCD043] transition-transform duration-300 group-hover:translate-y-[2px]"
                    >
                      <path
                        d="M4.5 7.5L10 13L15.5 7.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.34,
                  }}
                  className="absolute bottom-0 left-0 max-w-[310px] text-[13px] font-normal leading-[1.55] text-[#D6D6D0]"
                >
                  The luxurious hotel in the most beautiful European city with
                  an exclusive restaurant, conference-hall, and art-bar.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Mobile Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-[24px] max-w-[310px] text-center lg:hidden"
          >
            <p className="text-[14px] font-normal leading-[1.62] tracking-[-0.025em] text-[#D6D6D0]">
              The luxurious hotel in the most beautiful European city with an
              exclusive restaurant, conference-hall, and art-bar.
            </p>
          </motion.div>

          {/* Hotel Preview */}
          <motion.div
            id="hotel-preview"
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mt-[44px] sm:mt-[55px] lg:mt-[76px]"
          >
            <div className="relative overflow-hidden">
              <img
                src={heroRoom}
                alt="Luxury BankHotel room interior"
                fetchPriority="high"
                className="h-[425px] w-full object-cover object-[56%_center] sm:h-[520px] sm:object-center lg:h-[625px] xl:h-[630px]"
              />

              {/* Desktop Booking Form */}
              <div className="absolute right-0 top-0 hidden h-[118px] w-[59.5%] min-w-[760px] grid-cols-3 lg:grid">
                {/* Check In */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveCalendar(
                      activeCalendar === "checkIn"
                        ? null
                        : "checkIn",
                    )
                  }
                  className="relative flex h-full items-center justify-between border-r border-white/15 text-left backdrop-blur-[6px] transition-[filter] duration-300 hover:brightness-105"
                  style={{
                    backgroundColor: "rgb(0 0 0 / 41%)",
                    paddingLeft: "42px",
                    paddingRight: "34px",
                  }}
                >
                  <div>
                    <span className="block text-[12px] font-medium uppercase text-[#FFFCF6]">
                      Check In
                    </span>

                    <span className="mt-[7px] block min-h-[15px] text-[11px] text-white/65">
                      {checkIn
                        ? formatDate(checkIn)
                        : "Select arrival date"}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="mr-[12px] h-[18px] w-[18px] shrink-0 text-[#FCD043]"
                  >
                    <path
                      d="M5 12L10 7L15 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>

                {/* Check Out */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveCalendar(
                      activeCalendar === "checkOut"
                        ? null
                        : "checkOut",
                    )
                  }
                  className="relative flex h-full items-center justify-between text-left backdrop-blur-[6px] transition-[filter] duration-300 hover:brightness-105"
                  style={{
                    backgroundColor: "rgb(0 0 0 / 38%)",
                    paddingLeft: "42px",
                    paddingRight: "34px",
                  }}
                >
                  <div>
                    <span className="block text-[12px] font-medium uppercase text-[#FFFCF6]">
                      Check Out
                    </span>

                    <span className="mt-[7px] block min-h-[15px] text-[11px] text-white/65">
                      {checkOut
                        ? formatDate(checkOut)
                        : "Select departure date"}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="mr-[12px] h-[18px] w-[18px] shrink-0 text-[#FCD043]"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>

                {/* Desktop Book Room */}
                <button
                  type="button"
                  onClick={handleBooking}
                  className="flex h-full items-center justify-center text-[13px] font-semibold uppercase tracking-[-0.025em] transition-[filter] duration-300 hover:brightness-105"
                  style={{
                    backgroundColor: "#FCD043",
                    color: "#17231E",
                  }}
                >
                  Book Room
                </button>
              </div>

              {/* Mobile Book Room */}
              <button
                type="button"
                onClick={openMobileBooking}
                aria-label="Book a room"
                className="absolute bottom-[20px] right-[22px] z-20 flex h-[118px] w-[118px] items-center justify-center text-[14px] font-medium italic text-[#26372F] transition-transform duration-300 active:scale-95 lg:hidden"
                style={{
                  backgroundColor: "#FCD043",
                  clipPath:
                    "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                }}
              >
                Book room
              </button>
            </div>

            {/* Desktop Calendar */}
            <AnimatePresence>
              {activeCalendar && !mobileBookingOpen && (
                <div
                  className={`absolute top-[117px] z-[80] hidden lg:block ${
                    activeCalendar === "checkIn"
                      ? "right-[39.5%]"
                      : "right-[19.8%]"
                  }`}
                >
                  <Calendar
                    title={
                      activeCalendar === "checkIn"
                        ? "Check In"
                        : "Check Out"
                    }
                    selectedDate={
                      activeCalendar === "checkIn"
                        ? checkIn
                        : checkOut
                    }
                    minimumDate={
                      activeCalendar === "checkIn"
                        ? today
                        : checkIn || today
                    }
                    onSelect={
                      activeCalendar === "checkIn"
                        ? handleCheckIn
                        : handleCheckOut
                    }
                    onClose={() => setActiveCalendar(null)}
                  />
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Hero Bottom Details */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pt-[48px] sm:pt-[66px] lg:pt-[76px]"
          >
            {/* Desktop Bottom */}
            <div className="hidden items-end justify-between sm:flex">
              <div className="flex flex-col items-start gap-[10px]">
                <a
                  href="tel:+380322975020"
                  className="border-b pb-[1px] text-[17px] leading-none transition-opacity duration-300 hover:opacity-70 lg:text-[19px]"
                  style={{
                    color: "#FCD043",
                    borderColor: "#FCD043",
                  }}
                >
                  +38 032 297 50 20
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=8+Lystopadovoho+Chynu+Lviv"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/70 pb-[2px] text-[14px] uppercase leading-none tracking-[-0.02em] text-[#FFFCF6] transition-colors duration-300 hover:text-[#FCD043] lg:text-[17px]"
                >
                  8 Lystopadovoho Chynu,Lviv
                </a>
              </div>

              <p className="text-right text-[16px] font-medium uppercase leading-[1.08] tracking-[-0.025em] text-[#FFFCF6] lg:text-[18px]">
                Art &amp; Congress
                <br />
                <em className="inline-block font-normal">Hall</em>
              </p>
            </div>

            {/* Mobile Bottom */}
            <p className="text-[12px] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-[#D8D9D4] sm:hidden">
              Art &amp; Congress
              <br />
              <em className="inline-block font-normal">Hall</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile Booking Modal */}
      <AnimatePresence>
        {mobileBookingOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[300] flex items-end bg-black/60 p-[10px] backdrop-blur-[5px] lg:hidden"
            style={{
              fontFamily: BODY_FONT,
            }}
            onClick={closeMobileBooking}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 55,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 45,
              }}
              transition={{
                duration: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[94svh] w-full overflow-y-auto bg-[#313F38] p-[18px]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-[#FCD043]">
                    Reservation
                  </span>

                  <h2
                    className="mt-[5px] text-[25px] font-normal leading-none text-[#FFFCF6]"
                    style={{
                      fontFamily: BODY_FONT,
                    }}
                  >
                    Book your room
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeMobileBooking}
                  aria-label="Close reservation"
                  className="flex h-[36px] w-[36px] items-center justify-center border border-white/20 text-[18px] font-light text-[#FFFCF6]"
                >
                  ×
                </button>
              </div>

              {/* Date Fields */}
              <div className="mt-[21px] grid grid-cols-2 border border-white/10 pl-5">
                <button
                  type="button"
                  onClick={() => setActiveCalendar("checkIn")}
                  className={`min-h-[74px] border-r border-white/10 px-[15px] text-left ${
                    activeCalendar === "checkIn"
                      ? "bg-white/10"
                      : ""
                  }`}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#FCD043]">
                    Check In
                  </span>

                  <span className="mt-[7px] block text-[12px] text-white/80">
                    {checkIn
                      ? formatDate(checkIn)
                      : "Select date"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCalendar("checkOut")}
                  className={`min-h-[74px] px-[15px] text-left ${
                    activeCalendar === "checkOut"
                      ? "bg-white/10"
                      : ""
                  }`}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#FCD043]">
                    Check Out
                  </span>

                  <span className="mt-[7px] block text-[12px] text-white/80">
                    {checkOut
                      ? formatDate(checkOut)
                      : "Select date"}
                  </span>
                </button>
              </div>

              {/* Calendar */}
              <AnimatePresence mode="wait">
                {activeCalendar && (
                  <div className="mt-[16px] flex justify-center">
                    <Calendar
                      title={
                        activeCalendar === "checkOut"
                          ? "Check Out"
                          : "Check In"
                      }
                      selectedDate={
                        activeCalendar === "checkOut"
                          ? checkOut
                          : checkIn
                      }
                      minimumDate={
                        activeCalendar === "checkOut"
                          ? checkIn || today
                          : today
                      }
                      onSelect={
                        activeCalendar === "checkOut"
                          ? handleCheckOut
                          : handleCheckIn
                      }
                      onClose={() => setActiveCalendar(null)}
                    />
                  </div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={handleBooking}
                className="mt-[17px] flex min-h-[58px] w-full items-center justify-center text-[12px] font-semibold uppercase tracking-[0.05em]"
                style={{
                  backgroundColor: "#FCD043",
                  color: "#203129",
                }}
              >
                Book Room
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Confirmation Popup */}
      <AnimatePresence>
        {confirmationOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60 p-[20px] backdrop-blur-[6px]"
            style={{
              fontFamily: BODY_FONT,
            }}
            onClick={() => setConfirmationOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.97,
              }}
              transition={{
                duration: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-[450px] border border-white/15 bg-[#394B42] p-[30px] text-center shadow-[0_35px_110px_rgba(0,0,0,0.42)]"
            >
              <img
                src={starIcon}
                alt=""
                aria-hidden="true"
                className="mx-auto h-[44px] w-[44px]"
              />

              <span className="mt-[19px] block text-[10px] font-semibold uppercase tracking-[0.19em] text-[#FCD043]">
                BankHotel
              </span>

              <h2
                className="mt-[9px] text-[34px] font-normal leading-none text-[#FFFCF6]"
                style={{
                  fontFamily: HEADING_FONT,
                }}
              >
                Your stay is ready
              </h2>

              <p className="mx-auto mt-[14px] max-w-[345px] text-[13px] leading-[1.65] text-white/65">
                Your selected dates have been saved successfully. We look
                forward to welcoming you to BankHotel.
              </p>

              {/* Selected Dates */}
              <div className="mt-[26px] grid grid-cols-2 border-y border-white/10 py-[19px]">
                <div className="border-r border-white/10 px-[8px]">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FCD043]">
                    Check In
                  </span>

                  <span className="mt-[8px] block text-[13px] text-[#FFFCF6]">
                    {formatDate(checkIn)}
                  </span>
                </div>

                <div className="px-[8px]">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FCD043]">
                    Check Out
                  </span>

                  <span className="mt-[8px] block text-[13px] text-[#FFFCF6]">
                    {formatDate(checkOut)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setConfirmationOpen(false)}
                className="mt-[25px] min-h-[55px] w-full text-[12px] font-semibold uppercase tracking-[0.05em]"
                style={{
                  backgroundColor: "#FCD043",
                  color: "#203129",
                }}
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;