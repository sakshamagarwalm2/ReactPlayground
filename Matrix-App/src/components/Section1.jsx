import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EarPhone from "../assets/EarPhone.svg";
import Location from "../assets/Location.svg";
import coms from "../assets/coms.svg";
import CustomButton from "./CustomButton";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md  px-10 py-10 mb-[340px]"
      id="features"
      ref={ref}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <img src={coms} alt="Feature Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Future Concept.
            </h3>
            <p className="text-gray-300 text-center">
            Igniting Digital Excellence. We craft exceptional web solutions, captivating designs, and compelling content. Let's shape your digital success together.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={EarPhone} alt="Feature Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">The Big Ideas.</h3>
            <p className="text-gray-300 text-center">
            We bring your boldest visions to life, leaving a powerful imprint in the digital landscape. Let’s elevate your ideas together.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={Location} alt="Feature Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Creative Solutions.</h3>
            <p className="text-gray-300 text-center">
            Where possibilities meet inventive solutions. Our unique approach ensures your challenges meet inspired resolutions. Let's create brilliance together.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
          <CustomButton text="Testimonials" link="testimonials" />
        </div>
      </div>
    </section>
  );
};

export default Features;
