import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export const iconVariants = {
  sun: MdSunny,
  moon: IoMdMoon,
  github: FaGithubSquare,
  linkedin: FaLinkedin,
  twitter: FaSquareXTwitter,
  hamburger: RxHamburgerMenu,
  close: IoCloseOutline,
  mail: FaEnvelopeSquare
};

const colorVariants = {
  black: "text-black",
  grey: "text-slate-700",
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-red-700",
  content: "text-content",
};

const sizeVariants = {
  xl: "w-8 h-8",
  l: "w-6 h-6",
  m: "w-4 h-4",
  s: "w-2 h-2",
};

type PropTypes = {
  variant: keyof typeof iconVariants;
  color?: keyof typeof colorVariants;
  size?: keyof typeof sizeVariants;
  className?: string;
};

export const Icon = ({ variant, color, size = "m", className }: PropTypes) => {
  const Component = iconVariants[variant];
  const styles = [color && colorVariants[color], className]
    .filter((el) => el !== undefined)
    .join(" ");

  return (
    <span className={styles}>
      <Component className={sizeVariants[size]} />
    </span>
  );
};
