import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";





const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-violet-900
    to-black flex xl:flex-row flex-col items-center
    justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* left section*/}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
          }}
          className="text-5xl md:text-7xl
            lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Result <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
          }}
          className="text-xl md:text-1xl
          lg:text-2xl text-purple-200 max-w-2xl"
        >
          I am a B.Tech Computer Science student with a strong foundation in
          Full Stack Development and a growing specialization in Artificial
          Intelligence and Machine Learning. Proficient in Python, JavaScript,
          and C, I have built and contributed to projects across domains
          including hackathons.
        </motion.p>
      </div>

      {/* right section*/}
      <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
      scene="https://prod.spline.design/ZxApik6TkosVrJvE/scene.splinecode" />
    </section>
  );
};

export default HeroSection;
