import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Header from "../../components/layout/Header.jsx";

import bankHotelLogo from "../../assets/logos/bank-hotel-logo.svg";
import heroRoom from "../../assets/images/home/hero-room.png";
import starIcon from "../../assets/icons/star.svg";

const MONTHS = [
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

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const toDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

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

const BookingCalendar = ({
  selectedDate,
  minDate,
  onSelect,
  onClose,
  title,
}) => {
  const initialDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : new Date();

  const [viewDate, setViewDate] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startOffset = (firstDay.getDay() + 6) % 7;

    const result = [];

    for (let index = 0; index < startOffset; index += 1) {
      result.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day += 1) {
      result.push(new Date(year, month, day));
    }

    return result;
  }, [viewDate]);

  const previousMonth = () => {
    setViewDate(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setViewDate(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + 1, 1),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-[350px] border border-white/15 bg-[#34483f] p-[20px] shadow-2xl backdrop-blur-xl"
    >
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f8cd42]">
            {title}
          </span>

          <h3 className="mt-[5px] text-[19px] font-medium text-[#f5f3ed]">
            {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close calendar"
          className="flex h-[34px] w-[34px] items-center justify-center border border-white/15 text-[18px] text-white/70 transition-colors hover:border-[#f8cd42] hover:text-[#f8cd42]"
        >
          ×
        </button>
      </div>

      {/* Calendar Controls */}
      <div className="mt-[20px] flex items-center justify-between">
        <button
          type="button"
          onClick={previousMonth}
          className="flex h-[34px] w-[34px] items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[#f8cd42] hover:text-[#f8cd42]"
        >
          ←
        </button>

        <span className="text-[12px] uppercase tracking-[0.08em] text-white/60">
          Select a date
        </span>

        <button
          type="button"
          onClick={nextMonth}
          className="flex h-[34px] w-[34px] items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[#f8cd42] hover:text-[#f8cd42]"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="mt-[20px] grid grid-cols-7 gap-[4px]">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="flex h-[30px] items-center justify-center text-[10px] uppercase text-white/40"
          >
            {day}
          </span>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-[4px]">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <span key={`empty-${index}`} className="h-[38px]" />;
          }

          const key = toDateKey(date);

          const disabled = minDate ? key < minDate : false;
          const selected = selectedDate === key;

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`flex h-[38px] items-center justify-center text-[12px] transition-all ${
                selected
                  ? "bg-[#f8cd42] font-semibold text-[#203129]"
                  : disabled
                    ? "cursor-not-allowed text-white/15"
                    : "text-[#f5f3ed] hover:bg-white/10 hover:text-[#f8cd42]"
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
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const today = useMemo(() => toDateKey(new Date()), []);

  const selectCheckIn = (date) => {
    setCheckIn(date);

    if (checkOut && checkOut <= date) {
      setCheckOut("");
    }

    setActiveCalendar("checkOut");
  };

  const selectCheckOut = (date) => {
    setCheckOut(date);
    setActiveCalendar(null);
  };

  const openMobileBooking = () => {
    setMobileBookingOpen(true);
    setActiveCalendar(checkIn ? "checkOut" : "checkIn");
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
    setBookingSuccess(true);
  };

  const scrollToHotel = () => {
    document
      .getElementById("hotel-preview")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#2f433a] text-[#f5f3ed]">
      {/* Homepage Hero */}
      <section
        id="home"
        className="relative min-h-screen bg-[#2f433a] pb-[32px] lg:pb-[46px]"
        aria-labelledby="home-title"
      >
        <Header />

        <div className="mx-auto w-full max-w-[1920px] px-[10px] sm:px-[22px] lg:px-[30px]">
          {/* Hero Introduction */}
          <div className="relative pt-[17px] sm:pt-[30px] lg:pt-[37px]">
            <div className="grid gap-[45px] xl:grid-cols-[minmax(0,1.66fr)_minmax(310px,0.56fr)] xl:gap-[88px]">
              {/* Hero Branding */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h1 id="home-title" className="sr-only">
                    BankHotel
                  </h1>

                  <img
                    src={bankHotelLogo}
                    alt="BankHotel"
                    className="mx-auto h-auto w-full max-w-[365px] object-contain sm:max-w-[600px] lg:mx-0 lg:max-w-[970px]"
                  />
                </motion.div>

                {/* Service Categories */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-[29px] pt-[4px] text-center text-[11px] font-semibold uppercase leading-[1.45] tracking-[-0.035em] text-[#f8cd42] sm:text-[14px] lg:mt-[32px] lg:text-left lg:text-[20px]"
                >
                  Rooms // Restaurant // Congress Hall // Wine Bar
                </motion.p>

                {/* Mobile Divider */}
                <div className="mx-auto mt-[24px] h-px w-[172px] bg-white/10 lg:hidden" />
              </div>

              {/* Desktop Hero Information */}
              <div className="relative hidden min-h-[220px] xl:block">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start justify-between gap-[35px]"
                >
                  {/* Since Badge */}
                  <div className="flex h-[54px] min-w-[190px] items-center rounded-full border border-white/25 px-[22px]">
                    <img
                      src={starIcon}
                      alt=""
                      aria-hidden="true"
                      className="mr-[15px] h-[25px] w-[25px] shrink-0"
                    />

                    <span className="whitespace-nowrap text-[15px] tracking-[-0.025em]">
                      Since 1973
                    </span>
                  </div>

                  {/* Scroll Geometry */}
                  <button
                    type="button"
                    onClick={scrollToHotel}
                    aria-label="Scroll to hotel room"
                    className="group relative flex h-[52px] w-[52px] shrink-0 items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 52 52"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full text-white/25 transition-colors group-hover:text-[#f8cd42]"
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
                      className="relative h-[16px] w-[16px] text-[#f8cd42]"
                      aria-hidden="true"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.34 }}
                  className="absolute bottom-0 left-0 max-w-[325px] text-[14px] leading-[1.55] text-[#d1d6d2]"
                >
                  The luxurious hotel in the most beautiful European city with
                  an exclusive restaurant, conference-hall, and art-bar.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Mobile Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-[24px] max-w-[300px] text-center text-[14px] leading-[1.65] text-[#d2d7d3] lg:hidden"
          >
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.
          </motion.p>

          {/* Hotel Image */}
          <motion.div
            id="hotel-preview"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mt-[44px] lg:mt-[76px]"
          >
            <div className="relative overflow-visible lg:overflow-hidden">
              <img
                src={heroRoom}
                alt="Luxury BankHotel room interior"
                fetchPriority="high"
                className="h-[425px] w-full object-cover object-center sm:h-[520px] lg:h-[625px] xl:h-[630px]"
              />

              {/* Desktop Booking Form */}
              <div className="absolute right-0 top-0 z-20 hidden h-[118px] w-[59.5%] min-w-[760px] grid-cols-3 lg:grid">
                {/* Check In */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveCalendar(
                      activeCalendar === "checkIn" ? null : "checkIn",
                    )
                  }
                  className={`relative flex h-full items-center justify-between border-r border-white/10 px-[38px] text-left backdrop-blur-[10px] transition-colors ${
                    activeCalendar === "checkIn"
                      ? "bg-[#788078]"
                      : "bg-[rgba(103,112,106,0.9)] hover:bg-[#788078]"
                  }`}
                >
                  <div className="py-[10px]">
                    <span className="block text-[12px] font-semibold uppercase text-white">
                      Check In
                    </span>

                    <span className="mt-[7px] block min-h-[16px] text-[11px] text-white/65">
                      {checkIn ? formatDate(checkIn) : "Select arrival date"}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    className="h-[18px] w-[18px] text-[#f8cd42]"
                    aria-hidden="true"
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
                      activeCalendar === "checkOut" ? null : "checkOut",
                    )
                  }
                  className={`relative flex h-full items-center justify-between px-[38px] text-left backdrop-blur-[10px] transition-colors ${
                    activeCalendar === "checkOut"
                      ? "bg-[#555c53]"
                      : "bg-[rgba(66,72,64,0.94)] hover:bg-[#555c53]"
                  }`}
                >
                  <div className="py-[10px]">
                    <span className="block text-[12px] font-semibold uppercase text-white">
                      Check Out
                    </span>

                    <span className="mt-[7px] block min-h-[16px] text-[11px] text-white/65">
                      {checkOut ? formatDate(checkOut) : "Select departure date"}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    className="h-[18px] w-[18px] text-[#f8cd42]"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>

                {/* Book Room */}
                <button
                  type="button"
                  onClick={handleBooking}
                  className="flex h-full items-center justify-center bg-[#f8cd42] text-[13px] font-semibold uppercase text-[#17231e] transition-colors hover:bg-[#ffdc5c]"
                >
                  Book Room
                </button>
              </div>

              {/* Desktop Calendar */}
              <AnimatePresence>
                {activeCalendar && !mobileBookingOpen && (
                  <div
                    className={`absolute top-[132px] z-50 hidden lg:block ${
                      activeCalendar === "checkIn"
                        ? "right-[39.7%]"
                        : "right-[19.8%]"
                    }`}
                  >
                    <BookingCalendar
                      title={
                        activeCalendar === "checkIn"
                          ? "Check In"
                          : "Check Out"
                      }
                      selectedDate={
                        activeCalendar === "checkIn" ? checkIn : checkOut
                      }
                      minDate={
                        activeCalendar === "checkIn"
                          ? today
                          : checkIn || today
                      }
                      onSelect={
                        activeCalendar === "checkIn"
                          ? selectCheckIn
                          : selectCheckOut
                      }
                      onClose={() => setActiveCalendar(null)}
                    />
                  </div>
                )}
              </AnimatePresence>

              {/* Mobile Octagonal Book Button */}
              <button
                type="button"
                onClick={openMobileBooking}
                className="absolute bottom-[22px] right-[22px] z-20 flex h-[118px] w-[118px] items-center justify-center bg-[#f8cd42] text-[14px] italic text-[#26372f] transition-transform active:scale-95 lg:hidden"
                style={{
                  clipPath:
                    "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                }}
              >
                Book room
              </button>
            </div>
          </motion.div>

          {/* Hero Bottom Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-[48px] lg:pt-[76px]"
          >
            {/* Desktop Details */}
            <div className="hidden items-end justify-between sm:flex">
              <div className="flex flex-col items-start gap-[10px]">
                <a
                  href="tel:+380322975020"
                  className="border-b border-[#f8cd42] pb-[1px] text-[17px] leading-none text-[#f8cd42] lg:text-[19px]"
                >
                  +38 032 297 50 20
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=8+Lystopadovoho+Chynu+Lviv"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/70 pb-[2px] text-[14px] uppercase leading-none lg:text-[17px]"
                >
                  8 Lystopadovoho Chynu,Lviv
                </a>
              </div>

              <p className="pb-[3px] text-right text-[16px] uppercase leading-[1.12] lg:text-[18px]">
                Art &amp; Congress
                <br />
                <span className="inline-block italic">Hall</span>
              </p>
            </div>

            {/* Mobile Bottom */}
            <p className="pb-[4px] text-[12px] font-medium uppercase leading-[1.05] sm:hidden">
              Art &amp; Congress
              <br />
              <span className="inline-block italic">Hall</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile Booking Modal */}
      <AnimatePresence>
        {mobileBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-end bg-black/55 p-[10px] backdrop-blur-[4px] lg:hidden"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-[#2f433a] p-[18px]"
            >
              {/* Mobile Booking Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#f8cd42]">
                    Reservation
                  </span>

                  <h2 className="mt-[4px] text-[24px] font-medium">
                    Book your room
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileBookingOpen(false);
                    setActiveCalendar(null);
                  }}
                  className="flex h-[38px] w-[38px] items-center justify-center border border-white/20 text-[20px]"
                >
                  ×
                </button>
              </div>

              {/* Selected Dates */}
              <div className="mt-[18px] grid grid-cols-2 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveCalendar("checkIn")}
                  className={`min-h-[70px] border-r border-white/10 px-[15px] text-left ${
                    activeCalendar === "checkIn" ? "bg-white/10" : ""
                  }`}
                >
                  <span className="block text-[10px] uppercase text-[#f8cd42]">
                    Check In
                  </span>

                  <span className="mt-[6px] block text-[12px]">
                    {checkIn ? formatDate(checkIn) : "Select date"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCalendar("checkOut")}
                  className={`min-h-[70px] px-[15px] text-left ${
                    activeCalendar === "checkOut" ? "bg-white/10" : ""
                  }`}
                >
                  <span className="block text-[10px] uppercase text-[#f8cd42]">
                    Check Out
                  </span>

                  <span className="mt-[6px] block text-[12px]">
                    {checkOut ? formatDate(checkOut) : "Select date"}
                  </span>
                </button>
              </div>

              <div className="mt-[15px] flex justify-center">
                <BookingCalendar
                  title={
                    activeCalendar === "checkOut" ? "Check Out" : "Check In"
                  }
                  selectedDate={
                    activeCalendar === "checkOut" ? checkOut : checkIn
                  }
                  minDate={
                    activeCalendar === "checkOut" ? checkIn || today : today
                  }
                  onSelect={
                    activeCalendar === "checkOut"
                      ? selectCheckOut
                      : selectCheckIn
                  }
                  onClose={() => setActiveCalendar(null)}
                />
              </div>

              <button
                type="button"
                onClick={handleBooking}
                className="mt-[15px] flex min-h-[58px] w-full items-center justify-center bg-[#f8cd42] text-[12px] font-semibold uppercase text-[#203129]"
              >
                Confirm dates
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Confirmation Popup */}
      <AnimatePresence>
        {bookingSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60 p-[20px] backdrop-blur-[6px]"
            onClick={() => setBookingSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-[430px] border border-white/15 bg-[#34483f] p-[28px] text-center shadow-2xl"
            >
              <img
                src={starIcon}
                alt=""
                aria-hidden="true"
                className="mx-auto h-[42px] w-[42px]"
              />

              <span className="mt-[18px] block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f8cd42]">
                BankHotel
              </span>

              <h2 className="mt-[8px] text-[27px] font-medium">
                Your dates are ready
              </h2>

              <p className="mx-auto mt-[12px] max-w-[330px] text-[13px] leading-[1.6] text-white/65">
                Your stay has been selected successfully. We look forward to
                welcoming you to BankHotel.
              </p>

              <div className="mt-[23px] grid grid-cols-2 border-y border-white/10 py-[17px]">
                <div className="border-r border-white/10">
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-[#f8cd42]">
                    Check In
                  </span>

                  <span className="mt-[6px] block text-[13px]">
                    {formatDate(checkIn)}
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-[#f8cd42]">
                    Check Out
                  </span>

                  <span className="mt-[6px] block text-[13px]">
                    {formatDate(checkOut)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookingSuccess(false)}
                className="mt-[24px] min-h-[54px] w-full bg-[#f8cd42] text-[12px] font-semibold uppercase text-[#203129] transition-colors hover:bg-[#ffdc5c]"
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