"use client";
import profileImg from "@assets/images/profile-image.png";
import handIcon from "@assets/images/hand-icon.png";
import { GoDownload } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "motion/react";

// Header component
export default function Header() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
      {/* User photo */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <Image
          src={profileImg}
          alt=""
          className="size-32 rounded-full object-cover object-top"
        />
      </motion.div>

      {/* Paragraph */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-ovo mb-3 flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi! I&apos;m Ehab Waleed <Image src={handIcon} width={24} alt="" />
      </motion.p>

      {/* headline */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="sm:6xl font-ovo text-3xl font-semibold lg:text-[66px]"
      >
        Full Stack web developer
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="font-ovo mx-auto max-w-2xl text-center text-lg text-zinc-500 md:text-start dark:text-zinc-300"
      >
        Full Stack Developer with strong expertise in React.js, Next.js, React
        Native for mobile, TypeScript, and solid backend experience using
        Node.js, Express, MongoDB, MySQL, and Sequelize.
      </motion.p>

      {/* Anchors */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        {/* Git hub anchor */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          href="https://github.com/Ehabzakout"
          className="group flex w-full items-center justify-center gap-2 rounded-full border bg-black px-10 py-3 text-white hover:bg-black/85 md:w-fit dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        >
          GitHub <GoArrowRight className="w-4 group-hover:animate-bounce" />
        </motion.a>

        {/* Download anchor */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          href="/my-resume.pdf"
          download
          className="flex w-full items-center gap-2 rounded-full border border-gray-600 px-10 py-3 hover:bg-black/85 hover:text-white md:w-fit dark:border-white/50 dark:hover:border-transparent dark:hover:bg-zinc-800"
        >
          My Resume
          <GoDownload className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}
