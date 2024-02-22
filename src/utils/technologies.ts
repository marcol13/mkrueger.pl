type TechType = {
  name: string;
  icon: string;
  color: string;
};

export const technologies: { [key: string]: TechType } = {
  nextjs: {
    name: "Next.js",
    icon: "next.png",
    color: "#000000",
  },
  typescript: {
    name: "TypeScript",
    icon: "typescript.svg",
    color: "#007ACC",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: "tailwind.png",
    color: "#38B2AC",
  },
  sass: {
    name: "Sass",
    icon: "sass.svg",
    color: "#CC6699",
  },
  i18n: {
    name: "i18n",
    icon: "i18next.png",
    color: "#FFD700",
  },
  ghActions: {
    name: "GitHub Actions",
    icon: "gh-actions.png",
    color: "#181717",
  },
  react: {
    name: "React",
    icon: "react.png",
    color: "#61DAFB",
  },
  node: {
    name: "Node.js",
    icon: "node-js.png",
    color: "#339933",
  },
  styledComponents: {
    name: "Styled Components",
    icon: "styled-components.png",
    color: "#DB7093",
  },
};
