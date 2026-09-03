import { Link } from "react-router-dom";
import { motion } from "motion/react";

import aboutMainImage from "../../../assets/images/home/about-main.png";
import aboutSideImage from "../../../assets/images/home/about-side.png";
import starIcon from "../../../assets/icons/star.svg";

const EASE = [0.16, 1, 0.3, 1];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#313F38] font-body text-[#FFFCF6]"
    >
      {/* Desktop About */}
      <div className="relative mx-auto hidden min-h-[1050px] w-full max-w-[1920px] xl:block 2xl:min-h-[1310px]">
        {/* Decorative Geometry */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1920 1310"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        >
          <path
            d="M0 18H1920"
            fill="none"
            stroke="#738078"
            strokeWidth="1"
            opacity="0.13"
          />

          <path
            d="M0 730A710 710 0 0 1 1420 730"
            fill="none"
            stroke="#738078"
            strokeWidth="1"
            opacity="0.25"
          />

          <path
            d="M1420 18V1310"
            fill="none"
            stroke="#738078"
            strokeWidth="1"
            opacity="0.18"
          />
        </svg>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="absolute left-[1.55%] top-[12.8%] z-10 h-[64.5%] w-[31.55%] overflow-hidden"
        >
          <motion.img
            src={aboutMainImage}
            alt="BankHotel luxury reception interior"
            className="h-full w-full object-cover"
            initial={{ scale: 1.055 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: EASE,
            }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: EASE,
          }}
          className="absolute left-[42.55%] top-[25.5%] z-20"
        >
          <h2
            id="about-title"
            className="font-editorial font-normal uppercase tracking-[-0.06em]"
          >
            <span className="block text-[clamp(82px,6.15vw,118px)] leading-[0.73] text-[#FCD043]">
              About
            </span>

            <span className="ml-[47%] mt-[24px] block text-[clamp(82px,6.15vw,118px)] leading-[0.73] text-[#FFFCF6]">
              Us
            </span>
          </h2>
        </motion.div>

        {/* High Quality Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.85,
            delay: 0.16,
            ease: EASE,
          }}
          className="absolute left-[42.55%] top-[60.1%] z-20 w-[24%] max-w-[455px]"
        >
          <h3 className="font-editorial text-[clamp(38px,2.6vw,50px)] font-normal leading-[0.95] tracking-[-0.035em] text-[#FFFCF6]">
            High Quality
          </h3>

          <p className="mt-[38px] max-w-[445px] font-body text-[13px] font-normal leading-[1.55] tracking-[-0.02em] text-[#A9ADA9]">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
        </motion.div>

        {/* Premium Circular Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: EASE,
          }}
          className="absolute right-[14.6%] top-[5.25%] z-20 h-[130px] w-[130px] 2xl:h-[140px] 2xl:w-[140px]"
        >
          <motion.svg
            viewBox="0 0 140 140"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full overflow-visible"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <defs>
              <path
                id="premium-about-circle"
                d="M70 70 m-49 0 a49 49 0 1 1 98 0 a49 49 0 1 1 -98 0"
              />
            </defs>

            <text
              fill="#B5BAB6"
              fontSize="7"
              fontWeight="500"
              letterSpacing="2"
              className="font-body"
            >
              <textPath
                href="#premium-about-circle"
                startOffset="2%"
              >
                PREMIUM ROOMS • BANK HOTEL •
              </textPath>
            </text>
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={starIcon}
              alt=""
              aria-hidden="true"
              className="h-[30px] w-[30px]"
            />
          </div>
        </motion.div>

        {/* Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: EASE,
          }}
          className="absolute right-[1.55%] top-[12.8%] z-10 h-[31.5%] w-[16.35%] overflow-hidden"
        >
          <motion.img
            src={aboutSideImage}
            alt="BankHotel premium interior detail"
            className="h-full w-full object-cover"
            initial={{ scale: 1.055 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: EASE,
            }}
          />
        </motion.div>

        {/* Rooms Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.2,
            ease: EASE,
          }}
          className="absolute right-[6.25%] top-[60%] z-20"
        >
          <Link
            to="/rooms"
            aria-label="Explore rooms and apartments"
            className="group relative flex h-[180px] w-[180px] items-center justify-center 2xl:h-[200px] 2xl:w-[200px]"
          >
            <svg
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-[#87918C]/70 transition-colors duration-300 group-hover:text-[#FCD043]"
            >
              <polygon
                points="100,2 160,21 198,70 198,130 160,179 100,198 40,179 2,130 2,70 40,21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <span className="relative flex flex-col items-center text-center font-body">
              <span className="text-[11px] font-medium italic leading-none text-[#FCD043]">
                Rooms
              </span>

              <span className="mt-[5px] text-[10px] font-normal leading-[1.3] text-[#FFFCF6]">
                and
                <br />
                apartments
              </span>

              <svg
                viewBox="0 0 28 16"
                aria-hidden="true"
                className="mt-[27px] h-[14px] w-[25px] text-[#FCD043] transition-transform duration-300 group-hover:translate-y-[4px]"
              >
                <path
                  d="M2 2L14 14L26 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Tablet & Mobile About */}
      <div className="relative mx-auto w-full max-w-[900px] px-[10px] pb-[85px] pt-[76px] sm:px-[22px] sm:pb-[110px] sm:pt-[100px] xl:hidden">
        {/* Decorative Curve */}
        <svg
          viewBox="0 0 700 450"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[20px] z-0 h-[370px] w-full"
        >
          <path
            d="M-130 425A480 480 0 0 1 830 425"
            fill="none"
            stroke="#738078"
            strokeWidth="1"
            opacity="0.19"
          />
        </svg>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="relative z-10"
        >
          <h2 className="font-editorial font-normal uppercase tracking-[-0.06em]">
            <span className="block text-[clamp(62px,16vw,100px)] leading-[0.77] text-[#FCD043]">
              About
            </span>

            <span className="ml-[42%] mt-[10px] block text-[clamp(62px,16vw,100px)] leading-[0.77] text-[#FFFCF6]">
              Us
            </span>
          </h2>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: EASE,
          }}
          className="relative z-10 mt-[58px] overflow-hidden sm:mt-[70px]"
        >
          <motion.img
            src={aboutMainImage}
            alt="BankHotel luxury reception interior"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.45,
              ease: EASE,
            }}
          />
        </motion.div>

        {/* Mobile Content */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.85,
            ease: EASE,
          }}
          className="relative z-10 mt-[48px]"
        >
          <h3 className="font-editorial text-[clamp(38px,10vw,52px)] font-normal leading-none tracking-[-0.035em] text-[#FFFCF6]">
            High Quality
          </h3>

          <p className="mt-[24px] max-w-[530px] font-body text-[14px] font-normal leading-[1.62] tracking-[-0.025em] text-[#A9ADA9]">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
        </motion.div>

        {/* Mobile Secondary Area */}
        <div className="relative z-10 mt-[56px] grid grid-cols-[minmax(0,1fr)_118px] items-end gap-[18px] sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-[28px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              ease: EASE,
            }}
            className="overflow-hidden"
          >
            <img
              src={aboutSideImage}
              alt="BankHotel premium interior detail"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <Link
            to="/rooms"
            aria-label="Explore rooms and apartments"
            className="group relative flex h-[118px] w-[118px] items-center justify-center sm:h-[155px] sm:w-[155px]"
          >
            <svg
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-[#87918C]/70"
            >
              <polygon
                points="100,2 160,21 198,70 198,130 160,179 100,198 40,179 2,130 2,70 40,21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <span className="relative flex flex-col items-center text-center font-body">
              <span className="text-[10px] font-medium italic text-[#FCD043]">
                Rooms
              </span>

              <span className="mt-[4px] text-[9px] leading-[1.25] text-[#FFFCF6] sm:text-[10px]">
                and
                <br />
                apartments
              </span>

              <svg
                viewBox="0 0 28 16"
                aria-hidden="true"
                className="mt-[17px] h-[12px] w-[22px] text-[#FCD043]"
              >
                <path
                  d="M2 2L14 14L26 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;