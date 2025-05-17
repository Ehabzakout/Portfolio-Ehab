import Image from "next/image";
import Logo from "../common/logo";
import emailIcon from "@assets/images/mail_icon.png";
import linkedInIcon from "@assets/images/linkedin-logo.svg";

import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="mx-auto mb-2 w-fit">
        <Logo />
      </div>
      <h3 className="flex justify-center gap-4 text-gray-400 dark:text-zinc-200">
        <Image src={emailIcon} alt="" className="w-6 object-contain" />
        ftwehab@gmail.com
      </h3>
      <div className="mx-auto mt-3 flex justify-center gap-14 px-20 sm:w-1/2">
        <a
          href="https://www.linkedin.com/in/ehab-zakout"
          target="_blank"
          className="flex items-center gap-2 font-bold"
        >
          <FaLinkedin className="size-6 text-[#0a66c2] dark:text-white" />{" "}
          Linkedin
        </a>
        <a
          href="https://github.com/Ehabzakout"
          target="_blank"
          className="flex items-center gap-2 font-bold"
        >
          <GrGithub className="size-6" /> GitHub
        </a>
      </div>
      <div className="mt-8 border-t-1 border-gray-400 text-center text-gray-400">
        <p>&copy; 2025 Ehab Waleed. All Rights Reserved.</p>
      </div>
    </div>
  );
}
