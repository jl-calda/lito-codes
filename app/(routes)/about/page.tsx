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
  FaBriefcase,
  FaCode,
  FaCubesStacked,
  FaDownload,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaMagnifyingGlass,
  FaMessage,
  FaSchool,
  FaShirt,
  FaStackExchange,
  FaTwitter,
  FaUserNinja,
} from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiGo,
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
import { CardBanner } from "@/components/card-banner";

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
    name: "Go",
    icon: <SiGo className="h-6 w-6 mr-2" />,
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

const socials = [
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

import { projects } from "@/data/projects";
import { StackIcons } from "@/components/stack-icons";
import { SidebarSeparator } from "@/components/sidebar-separator";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  const stacks = Array.from(
    new Set(projects.flatMap((project) => project.stack))
  );

  return (
    <section className="py-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-4 pb-4">
      <Card className="bg-primary p-3 hidden md:block">
        <CardContent className="relative md:h-full h-[40vh]">
          <Image
            src="/images/selfie.jpeg"
            alt="Joey"
            fill
            className="object-cover object-ce rounded-lg"
          />
        </CardContent>
      </Card>
      <Card className="md:col-span-2 relative">
        <CardHeader>
          <h3 className="text-xl font-semibold flex items-center">
            <FaMagnifyingGlass className="h-6 w-6 mr-2 text-primary" />
            Background
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
          <div className="flex items-center space-x-2 justify-end">
            <Button
              variant="secondary"
              className="rounded-lg"
              asChild
            >
              <Link
                href="/api/resume"
                target="_blank"
              >
                <FaDownload className="h-6 w-6 mr-2" />
                Resume
              </Link>
            </Button>
            <Button className="rounded-lg">
              <FaMessage className="h-6 w-6 mr-2" />
              Connect
            </Button>
          </div>
        </CardContent>
        <CardBanner text="Open for employment" />
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_2fr] gap-x-4 gap-y-4 md:col-span-3">
        <Card className="flex flex-col">
          <CardHeader>
            <h3 className="text-xl font-semibold flex">
              <FaSchool className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <p className="text-muted-foreground text-sm">
              Schools attended and courses I have taken
            </p>
          </CardHeader>
          <CardContent className="flex-1 py-0 flex flex-col space-y-2 pb-6">
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                BS in Civil Engg
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-end">
                Adamson University
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2009-2014
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Secondary
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-end">
                Mangaldan NHS
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2005-2009
              </p>
            </div>
            <Separator className="bg-secondary h-0.5" />
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-bold">
                Maximillian Schwarzmüller's React Guide
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                Udemy
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2019
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-bold">
                Jonas Schmedtmann's Complete Javascript Course
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                Udemy
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2018
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-bold">
                Anthony Alicea's JS Understanding the Weird Parts
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                Udemy
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2019
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col relative">
          <CardHeader>
            <h3 className="text-xl font-semibold flex">
              <FaBriefcase className="h-6 w-6 mr-2 text-primary" />
              Experience
            </h3>
            <p className="text-muted-foreground text-sm">
              Work experience and internships
            </p>
          </CardHeader>
          <CardContent className="flex-1 py-0 flex flex-col space-y-2 pb-6">
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Owner/Developer
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                quarto.asia
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2023-Present
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                SG
              </p>
            </div>
            <Separator className="bg-secondary h-0.5" />
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Design Engineer
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                Ruevaleur Construction
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2021-Present
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                SG
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Design Engr
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                DS Brown Singapore
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2019-2021
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                SG
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Associate Engr
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                Fluor Daniel Philippines
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                2018-2019
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                PH
              </p>
            </div>
            <div className="grid grid-flow-col gap-x-2 w-full place-items-start">
              <p className="text-sm text-muted-foreground font-medium justify-self-start">
                Structural Engr
              </p>
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                Chiyoda Philippines
              </p>
              <p className="text-sm text-muted-foreground font-medium place-self-end">
                2015-2018
              </p>
              <p className="text-sm text-muted-foreground font-medium justify-self-end">
                PH
              </p>
            </div>
          </CardContent>
          <CardBanner
            text="Help me land my first tech job!"
            secondary
          />
        </Card>
      </div>

      <Card className="md:col-span-3">
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
            {stacks.map((tech) => (
              <Button
                key={crypto.randomUUID()}
                variant="secondary"
                className="rounded-lg flex items-center space-x-2"
              >
                <StackIcons technology={tech} />
                <p>{tech}</p>
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
            asChild
          >
            <Link href="/projects">Check my projects</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col row-span-2 bg-primary relative">
        <CardHeader>
          <h3 className="text-xl font-semibold flex text-primary-foreground items-center">
            <FaShirt className="h-6 w-6 mr-2 text-primary-foreground" />
            Merch
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
        <CardBanner text="Opening soon" />
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
            asChild
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
            asChild
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
