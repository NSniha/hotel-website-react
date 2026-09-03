import { motion } from "motion/react";

import aboutMainImage from "../../../assets/images/home/about-main.png";
import aboutSideImage from "../../../assets/images/home/about-side.png";
import premiumRoomsBadge from "../../../assets/icons/premium-rooms-badge.svg";

const revealEase = [0.16, 1, 0.3, 1];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#313F38] text-[#FFFCF6]"
    >
      {/* Desktop Decorative Architecture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden xl:block"
      >
        {/* Large Circular Curve */}
        <svg
          viewBox="0 0 1920 1310"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M0 728 A709 709 0 0 1 1418 728"
            fill="none"
            stroke="#65736C"
            strokeWidth="1"
            opacity="0.35"
          />
        </svg>

        {/* Right Vertical Divider */}
        <span className="absolute bottom-0 left-[73.8%] top-0 w-px bg-[#66736D]/30" />

        {/* Top Horizontal Divider */}
        <span className="absolute left-0 right-0 top-[18px] h-px bg-[#66736D]/25" />
      </div>

      {/* Desktop Layout */}
      <div className="relative mx-auto hidden min-h-[clamp(980px,68.23vw,1310px)] w-full max-w-[1920px] xl:block">
        {/* Main About Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -55,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.1,
            ease: revealEase,
          }}
          className="absolute left-[30px] top-[clamp(120px,8.7vw,167px)] h-[clamp(610px,44.27vw,850px)] w-[clamp(430px,31.5vw,605px)] overflow-hidden"
        >
          <motion.img
            src={aboutMainImage}
            alt="BankHotel premium reception interior"
            className="h-full w-full object-cover"
            initial={{
              scale: 1.07,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              ease: revealEase,
            }}
          />
        </motion.div>

        {/* About Main Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease: revealEase,
          }}
          className="absolute left-[42.6%] top-[25.3%] z-10"
        >
          <h2
            id="about-title"
            className="font-editorial uppercase tracking-[-0.065em]"
          >
            <span className="block text-[clamp(82px,6.15vw,118px)] leading-[0.76] text-[#FCD043]">
              About
            </span>

            <span className="ml-[47%] mt-[22px] block text-[clamp(82px,6.15vw,118px)] leading-[0.76] text-[#FFFCF6]">
              Us
            </span>
          </h2>
        </motion.div>

        {/* High Quality Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 38,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,
            delay: 0.16,
            ease: revealEase,
          }}
          className="absolute left-[42.6%] top-[60.2%] w-[clamp(350px,24vw,460px)]"
        >
          <h3 className="font-editorial text-[clamp(34px,2.65vw,51px)] font-normal leading-none tracking-[-0.045em] text-[#FFFCF6]">
            High Quality
          </h3>

          <p className="mt-[42px] max-w-[445px] text-[clamp(13px,0.92vw,17px)] font-normal leading-[1.56] tracking-[-0.025em] text-[#A9ADA9]">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
        </motion.div>

        {/* Premium Rooms Badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: revealEase,
          }}
          className="absolute right-[14.8%] top-[5.6%] z-10 w-[clamp(100px,7.2vw,138px)]"
        >
          <motion.img
            src={premiumRoomsBadge}
            alt="Premium rooms BankHotel"
            className="h-auto w-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Small Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: revealEase,
          }}
          className="absolute right-[30px] top-[clamp(120px,8.7vw,167px)] h-[clamp(300px,21.6vw,415px)] w-[clamp(230px,16.35vw,314px)] overflow-hidden"
        >
          <motion.img
            src={aboutSideImage}
            alt="BankHotel premium room interior detail"
            className="h-full w-full object-cover"
            initial={{
              scale: 1.07,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              ease: revealEase,
            }}
          />
        </motion.div>

        {/* Rooms Octagonal Link */}
        <motion.a
          href="/rooms"
          aria-label="Explore BankHotel rooms and apartments"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: revealEase,
          }}
          whileHover={{
            y: -5,
          }}
          className="group absolute right-[6.2%] top-[60.7%] flex h-[clamp(155px,10.35vw,199px)] w-[clamp(155px,10.35vw,199px)] items-center justify-center"
        >
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-[#87908B]/75 transition-colors duration-300 group-hover:text-[#FCD043]"
          >
            <polygon
              points="100,2 160,21 198,70 198,130 160,179 100,198 40,179 2,130 2,70 40,21"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          <span className="relative flex flex-col items-center text-center">
            <span className="text-[12px] italic leading-[1.2] text-[#FCD043] 2xl:text-[13px]">
              Rooms
            </span>

            <span className="mt-[2px] text-[11px] leading-[1.25] text-[#FFFCF6] 2xl:text-[12px]">
              and
              <br />
              apartments
            </span>

            <svg
              viewBox="0 0 28 16"
              aria-hidden="true"
              className="mt-[28px] h-[15px] w-[27px] text-[#FCD043] transition-transform duration-300 group-hover:translate-y-[4px]"
            >
              <path
                d="M2 2L14 14L26 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </motion.a>
      </div>

      {/* Tablet & Mobile Layout */}
      <div className="relative mx-auto w-full max-w-[900px] px-[20px] py-[90px] sm:px-[30px] sm:py-[110px] xl:hidden">
        {/* Mobile Curve */}
        <svg
          viewBox="0 0 760 520"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[50px] h-[430px] w-full text-[#65736C]/30"
        >
          <path
            d="M-50 470 A430 430 0 0 1 810 470"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
            ease: revealEase,
          }}
          className="relative z-10"
        >
          <h2 className="font-editorial uppercase tracking-[-0.065em]">
            <span className="block text-[clamp(65px,15vw,105px)] leading-[0.8] text-[#FCD043]">
              About
            </span>

            <span className="ml-[43%] mt-[13px] block text-[clamp(65px,15vw,105px)] leading-[0.8] text-[#FFFCF6]">
              Us
            </span>
          </h2>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: revealEase,
          }}
          className="relative z-10 mt-[70px] overflow-hidden"
        >
          <img
            src={aboutMainImage}
            alt="BankHotel premium reception interior"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: revealEase,
          }}
          className="mt-[58px]"
        >
          <h3 className="font-editorial text-[clamp(38px,10vw,54px)] font-normal leading-none tracking-[-0.04em] text-[#FFFCF6]">
            High Quality
          </h3>

          <p className="mt-[27px] max-w-[520px] text-[14px] leading-[1.65] tracking-[-0.02em] text-[#A9ADA9] sm:text-[15px]">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
        </motion.div>

        {/* Bottom Media */}
        <div className="mt-[65px] grid grid-cols-[1fr_auto] items-end gap-[24px]">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              ease: revealEase,
            }}
            className="overflow-hidden"
          >
            <img
              src={aboutSideImage}
              alt="BankHotel premium room interior detail"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.a
            href="/rooms"
            aria-label="Explore BankHotel rooms and apartments"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: revealEase,
            }}
            className="group relative flex h-[125px] w-[125px] items-center justify-center sm:h-[155px] sm:w-[155px]"
          >
            <svg
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-[#87908B]/70"
            >
              <polygon
                points="100,2 160,21 198,70 198,130 160,179 100,198 40,179 2,130 2,70 40,21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <span className="relative text-center">
              <span className="block text-[10px] italic text-[#FCD043] sm:text-[11px]">
                Rooms
              </span>

              <span className="mt-[2px] block text-[9px] leading-[1.3] text-[#FFFCF6] sm:text-[10px]">
                and
                <br />
                apartments
              </span>

              <svg
                viewBox="0 0 28 16"
                aria-hidden="true"
                className="mx-auto mt-[18px] h-[13px] w-[23px] text-[#FCD043]"
              >
                <path
                  d="M2 2L14 14L26 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Premium Badge */}
        <motion.img
          src={premiumRoomsBadge}
          alt="Premium rooms BankHotel"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            rotate: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute right-[25px] top-[28px] w-[92px] sm:w-[115px]"
        />
      </div>
    </section>
  );
};

export default About;