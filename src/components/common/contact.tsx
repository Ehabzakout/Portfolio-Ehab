import bgContact from "@assets/images/header-bg-color.png";
import Image from "next/image";
import ContactForm from "../features/contact-form";
import { motion } from "motion/react";
export default function ContactMe({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      id="contact"
      className="relative mb-12 w-full scroll-mt-10 px-[12%] pt-10 text-center sm:scroll-mt-28"
    >
      {!isDarkMode && (
        <Image
          src={bgContact}
          alt=""
          className="absolute top-60 left-0 -z-10 opacity-50 sm:top-0 sm:h-[120%] sm:w-[150%]"
        />
      )}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-ovo text-lg"
      >
        Connect With Me
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-ovo mb-10 text-5xl"
      >
        Get in touch
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-zinc-500 dark:text-zinc-200"
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.h3>
      <ContactForm />
    </div>
  );
}
