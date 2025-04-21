import { motion } from "framer-motion";
import cyber from "../../../assets/heroimage.webp";
import { SlideLeft, SlideRight, ZoomIn, FadeIn } from "../../animations/animation"; // 🎬 Importy animací

const Gradient = () => (
  <>
    <motion.div
      variants={FadeIn(0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }} // viewport: { once: false } → umožňuje opakovanou animaci při scrollování
      className="relative z-1 h-6 mx-2.5 bg-white/10 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"
    />
    <motion.div
      variants={FadeIn(0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      className="relative z-1 h-6 mx-6 bg-white/20 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20"
    />
  </>
);

const BottomLine = () => (
  <>
    <motion.div
      variants={FadeIn(0.2)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-white/20 pointer-events-none xl:block"
    />
    <motion.svg
      variants={ZoomIn(0.4)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"
      width="20"
      height="20"
      fill="white"
    >
      <circle cx="10" cy="10" r="10" />
    </motion.svg>
    <motion.svg
      variants={ZoomIn(0.4)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"
      width="20"
      height="20"
      fill="white"
    >
      <circle cx="10" cy="10" r="10" />
    </motion.svg>
  </>
);

const Hero = () => {
  return (
    <div className="min-h-screen">
      <section className="relative w-full min-h-[115vh] mx-auto flex flex-col justify-center">
        <div className="w-full max-w-[90rem] px-6 sm:px-16 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mt-[160px]">
          <motion.div
            variants={SlideLeft(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col items-start"
          >
            {/* 👇 SlideLeft animace pro hlavní nadpis */}
            <h1 className="font-orbi font-bold text-white text-[40px] sm:text-[50px] md:text-[80px] leading-tight">
              Hraj, <br /> Objevuj, Žij.
            </h1>
          </motion.div>

          <motion.div
            variants={SlideRight(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="text-right max-w-md text-white"
          >
            {/* 👇 SlideRight pro text a tlačítka */}
            <p className="text-white/90 mb-4">
              Nejlepší české hry, jejich příběhy a <br />
              oficiální merch – na jednom místě.
            </p>
            <div className="flex gap-4 justify-end">
              <motion.button
                variants={FadeIn(0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="border px-4 py-2 border-white hover:bg-white hover:text-black transition"
              >
                VÍCE INFO
              </motion.button>
              <motion.button
                variants={FadeIn(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="border px-4 py-2 border-white hover:bg-white hover:text-black transition"
              >
                OBJEV HRY
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="mt-[100px]">
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <motion.div
              variants={ZoomIn(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="relative z-1 p-0.5 rounded-2xl bg-white/10"
            >
              <div className="relative bg-white/5 rounded-[1rem]">
                <div className="h-[1.4rem] bg-white/10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <motion.img
                    variants={ZoomIn(0.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    src={cyber}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />
                </div>
              </div>
              <Gradient />
            </motion.div>
          </div>
          <BottomLine />
        </div>
      </section>
    </div>
  );
};

export default Hero;
