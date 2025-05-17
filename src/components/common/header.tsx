import profileImg from "@assets/images/Untitled design.png";
import handIcon from "@assets/images/hand-icon.png";
import { GoDownload } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "motion/react";
export default function Header() {
  return (
    <div className="mx-auto flex w-11/12 max-w-3xl flex-col items-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <Image src={profileImg} alt="" className="size-32 rounded-full" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-ovo mb-3 flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi! I&apos;m Ehab Waleed <Image src={handIcon} width={24} alt="" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="sm:6xl font-ovo text-3xl font-semibold lg:text-[66px]"
      >
        FrontEnd web developer
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="font-ovo mx-auto max-w-2xl text-zinc-500 dark:text-zinc-300"
      >
        I am a junior frontend developer with a strong foundation in JavaScript,
        specializing in React and Next.js with typescript.
      </motion.p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          href="#contact"
          className="group flex w-fit items-center gap-2 rounded-full border bg-black px-10 py-3 text-white hover:bg-black/85 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        >
          Contact me <GoArrowRight className="w-4 group-hover:animate-bounce" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          href="/my-resume.pdf"
          download
          className="flex w-fit items-center gap-2 rounded-full border border-gray-600 px-10 py-3 hover:bg-black/85 hover:text-white dark:border-white/50 dark:hover:border-transparent dark:hover:bg-zinc-800"
        >
          My Resume
          <GoDownload className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}
