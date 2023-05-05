import React from "react";
import FormalPortrait from "../assets/img/FormalPortrait.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: "-100vw" },
    show: { opacity: 1, x: 0 },
  };
  return (
    <div className="w-full h-[91vh] flex flex-row items-center justify-center">
      <div className="w-[80rem] flex flex-row mt-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start justify-center gap-y-10 p-10 w-[40rem]"
        >
          <motion.h1
            variants={item}
            className="font-extrabold text-5xl text-primary drop-shadow-2xl shadow-primary"
          >
            Hey there, ✋
          </motion.h1>
          <motion.p
            variants={item}
            className="font-extrabold text-7xl text-primarydark drop-shadow-2xl shadow-primary"
          >
            I'm Jemuel
          </motion.p>
          <motion.p
            variants={item}
            className="text-neutral text-2xl font-semibold tracking-wider text-justify"
          >
            I am a computer engineering student who aspires to be a professional
            Software Engineer.
          </motion.p>
          <motion.p
            variants={item}
            className="text-nani text-xl tracking-wider text-justify"
          >
            During my studies in Computer Engineering, I honed my practical
            abilities in both hardware and software, and as I gained more
            experience, I found myself increasingly drawn to the world of
            software development.
          </motion.p>
        </motion.div>
        <div>
          <motion.img
            drag
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            src={FormalPortrait}
            alt="formal picture of myself"
            className="w-[35rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
