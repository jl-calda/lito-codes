import { FaGit, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export type Project = {
  name: string;
  slug: string;
  isFeatured: boolean;
  live: string;
  github: string;
  description: string;
  stack: string[];
  type: "guided" | "non-guided";
  images: {
    thumbnail: string;
    video?: string;
    other?: string[];
  };
};

export const projects: Project[] = [
  // Notion Clone
  {
    name: "Notion Clone",
    slug: "notion-clone",
    isFeatured: false,
    live: "https://jl-next-notion-clone.vercel.app",
    github: "https://github.com/jl-calda/notion-clone-app",
    description:
      "A guided project to clone the Notion app. Following the tutorial by codingwithantonio in youtube.",
    stack: [
      "next.js",
      "tailwindcss",
      "typescript",
      "clerk",
      "convex",
      "edgestore",
    ],
    type: "guided",
    images: {
      thumbnail: "/images/projects/notion-clone/notion-page.png",
      video: "/images/projects/notion-clone/notion-record.mov",
      other: [
        "/images/projects/notion-clone/notion-search.png",
        "/images/projects/notion-clone/notion-setting.png",
        "/images/projects/notion-clone/notion-signin.png",
      ],
    },
  },
  // Quarto.asia
  {
    name: "quarto.asia",
    slug: "quarto-asia",
    isFeatured: true,
    live: "https://quarto.asia",
    github: "https://github.com/jl-calda/quarto.sg",
    description:
      "A rental property posting site for Singapore. Features account creation and a location search filter using OneMap API.",
    stack: [
      "next.js",
      "tailwindcss",
      "typescript",
      "next-auth",
      "mongodb",
      "onemap-api",
      "react-hook-form",
      "shadcn-ui",
      "cloudinary",
    ],
    type: "non-guided",
    images: {
      thumbnail: "/images/projects/quarto-asia/quarto-home.png",
      video: "/images/projects/quarto-asia/quarto-record.mov",
      other: [
        "/images/projects/quarto-asia/quarto-login.png",
        "/images/projects/quarto-asia/quarto-post.png",
        "/images/projects/quarto-asia/quarto-post2.png",
        "/images/projects/quarto-asia/quarto-posting.png",
        "/images/projects/quarto-asia/quarto-profile.png",
      ],
    },
  },
];

export type Social = {
  name: string;
  url: string;
  icon: IconType;
};
export const socials: Social[] = [
  {
    name: "GitHub",
    url: "www.github.com",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "www.twitter.com",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com",
    icon: FaLinkedinIn,
  },
];
