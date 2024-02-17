"use client";

import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FaBlogger,
  FaCode,
  FaCubesStacked,
  FaDownload,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaMagnifyingGlass,
  FaShirt,
  FaTwitter,
  FaUserNinja,
} from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <SiReact className="h-6 w-6 mr-2" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-6 w-6 mr-2" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="h-6 w-6 mr-2" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="h-6 w-6 mr-2" />,
  },
  {
    name: "Express",
    icon: <FaReact className="h-6 w-6 mr-2" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-6 w-6 mr-2" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-6 w-6 mr-2" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="h-6 w-6 mr-2" />,
  },
  {
    name: "Kubernetes",
    icon: <FaReact className="h-6 w-6 mr-2" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="h-6 w-6 mr-2" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="h-6 w-6 mr-2" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="h-6 w-6 mr-2" />,
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "www.github.com",
    icon: <FaGithub className="h-6 w-6" />,
  },
  {
    name: "Twitter",
    url: "www.twitter.com",
    icon: <FaTwitter className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com",
    icon: <FaLinkedin className="h-6 w-6" />,
  },
];

const AboutPage = () => {
  return (
    <section className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-4 pb-4">
      <Card className="bg-primary p-3">
        <CardContent className="relative h-full">
          <Image
            src="/images/selfie.jpeg"
            alt="Joey"
            fill
            className="object-cover object-top rounded-lg"
          />
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold flex text-primary items-center justify-between">
            <div className="flex">
              <FaMagnifyingGlass className="h-6 w-6 mr-2 text-primary" />
              Background
            </div>
            <div className="text-xs text-white bg-amber-500 px-4 py-1">
              Open for Employment !
            </div>
          </h3>
          <p className="text-muted-foreground text-sm">
            Brief summary about me and work experience
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-7 px-4">
            Former structural engineer turned software developer. I have a
            passion for building robust and scalable applications. With a strong
            foundation in engineering principles, I bring a logical and
            analytical approach to problem-solving. I enjoy working in
            collaborative teams and continuously learning new technologies to
            stay up-to-date with the ever-evolving software industry.
          </p>
          <div>
            <Button
              variant="secondary"
              className="rounded-lg"
            >
              <FaDownload className="h-6 w-6 mr-2" />
            </Button>
            <Button
              variant="secondary"
              className="rounded-lg"
            >
              <FaDownload className="h-6 w-6 mr-2" />
              Resume
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <h3 className="text-xl font-semibold flex">
            <FaLaptopCode className="h-6 w-6 mr-2 text-primary" />
            Tech Stack
          </h3>
          <p className="text-muted-foreground text-sm">
            Current technologies I am using for my projects
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {technologies.map((tech, index) => (
              <Button
                key={crypto.randomUUID()}
                variant="secondary"
                className="rounded-lg"
              >
                {tech.icon}
                {tech.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <h3 className="text-xl font-semibold flex">
            <FaCubesStacked className="h-6 w-6 mr-2 text-primary" />
            Projects
          </h3>
          <p className="text-muted-foreground text-sm">
            Check out my latest projects
          </p>
        </CardHeader>
        <CardContent className="flex-1 p-0"></CardContent>
        <CardFooter className="p-2 justify-end">
          <Button
            variant="link"
            className="text-right"
          >
            <Link href="/projects">Check my projects</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col row-span-2 bg-primary">
        <CardHeader>
          <h3 className="text-xl font-semibold flex text-primary-foreground items-center justify-between">
            <div className="flex">
              <FaShirt className="h-6 w-6 mr-2 text-primary-foreground" />
              Merch
            </div>
            <div className="text-xs text-white bg-amber-500 px-4 py-1">
              Coming Soon!
            </div>
          </h3>
          <p className="text-muted text-sm">
            Get your hands on some cool merch. This will support me and this
            blog.
          </p>
        </CardHeader>
        <CardContent className="text-muted-foreground flex items-center grow-1 justify-center p-4">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/images/closed-shop.gif"
              alt="Closed shop"
              fill
              className="relative object-cover object-top rounded-lg"
            />
          </AspectRatio>
        </CardContent>
      </Card>
      {/* BLOGS */}
      <Card className="flex flex-col">
        <CardHeader>
          <h3 className="text-xl font-semibold flex">
            <FaBlogger className="h-6 w-6 mr-2 text-primary" />
            Blogs
          </h3>
          <p className="text-muted-foreground text-sm">
            Read my latest thoughts and ideas
          </p>
        </CardHeader>
        <CardContent className="flex-1 p-0"></CardContent>
        <CardFooter className="p-2 justify-end">
          <Button
            variant="link"
            className="text-right"
          >
            <Link href="/blog">View all posts</Link>
          </Button>
        </CardFooter>
      </Card>
      {/* SNIPPETS */}
      <Card className="flex flex-col">
        <CardHeader>
          <h3 className="text-xl font-semibold flex">
            <FaCode className="h-6 w-6 mr-2 text-primary" />
            Snippets
          </h3>
          <p className="text-muted-foreground text-sm">
            Some code i found interesting
          </p>
        </CardHeader>
        <CardContent className="flex-1 p-0"></CardContent>
        <CardFooter className="p-2 justify-end">
          <Button
            variant="link"
            className="text-right"
          >
            <Link href="/code">Check those snippets</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <h3 className="text-xl font-semibold flex">
            <FaUserNinja className="h-6 w-6 mr-2 text-primary" />
            Social
          </h3>
          <p className="text-muted-foreground text-sm">
            Find me on these platforms
          </p>
        </CardHeader>
        <CardContent className="flex-1 py-0 flex flex-row space-x-2 justify-center">
          {socials.map((social, index) => (
            <Button
              key={crypto.randomUUID()}
              variant="secondary"
              className="rounded-lg"
              size="icon"
              asChild
            >
              <Link href={social.url}>{social.icon}</Link>
            </Button>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutPage;
