import Image from "next/image";

import Css from "../images/skills/css.png";
import Firebase from "../images/skills/firebase.png";
import Git from "../images/skills/github1.png";
import Html from "../images/skills/html.png";
import JS from "../images/skills/javascript.png";
import Mongo from "../images/skills/mongo.png";
import Next from "../images/skills/nextjs.png";
import Node from "../images/skills/node.png";
import React from "../images/skills/react.png";
import Redux from "../images/skills/redux.png";
import Tailwind from "../images/skills/tailwind.png";

export const proskurinData = {
  name: "Volodymyr Proskurin",
  role: "Front End (Full Stack) Developer",
  summary: "SUMMARY",
  body: "I`m results-driven Front-End Developer, who already has few projects implemented both individually and as part of a team. I am passionate about software application development and never thought I would enjoy it so much.",
  contacts: [
    "+380502556563",
    "proskyrinv.g@gmail.com",
    "https://github.com/ProskurinV",
    "https://www.linkedin.com/in/volodymyr-proskurin-a85b7b24a/",
    "https://t.me/p_volodymyr_g",
  ],
};

export const skills = {
  tech: [
    {
      name: "HTML",
      img: <Image src={Html} alt="HTML " width={50} height={50} />,
    },
    {
      name: "CSS",
      img: <Image src={Css} alt="HTML " width={50} height={50} />,
    },
    {
      name: "JavaScript",
      img: <Image src={JS} alt="JS" width={50} height={50} />,
    },
    {
      name: "React",
      img: <Image src={React} alt="React" width={50} height={50} />,
    },
    {
      name: "Redux",
      img: <Image src={Redux} alt="Redux" width={50} height={50} />,
    },
    {
      name: "Git",
      img: <Image src={Git} alt="Git" width={50} height={50} />,
    },
    {
      name: "NodeJS",
      img: <Image src={Node} alt="Node" width={50} height={50} />,
    },
    {
      name: "MongoDB",
      img: <Image src={Mongo} alt="Node" width={50} height={50} />,
    },

    {
      name: "Next",
      img: <Image src={Next} alt="Next" width={50} height={50} />,
    },

    {
      name: "Tailwind CSS",
      img: <Image src={Tailwind} alt="Tailwind" width={50} height={50} />,
    },
    {
      name: "Firebase",
      img: <Image src={Firebase} alt="Firebase" width={50} height={50} />,
    },
  ],
  soft: [
    { name: "Willingness to learn" },
    { name: "Self management" },
    { name: "Honest" },
    { name: "Teamwork" },
  ],
};

export const lang = {
  title: "LANGUAGES",
  body: [
    { item: "English", status: " intermediate" },
    { item: "Ukrainian", status: " native" },
    { item: "Russian", status: " native" },
  ],
};

export const education = {
  title: "EDUCATION",
  body: [
    {
      position: "Full Stack Developer, GOIT (IT School)",
      period: "04/2022 - 02/2023",
    },
    {
      position:
        "Spesialist in jurisprudence,Yaroslav Mudryi National Law University",
      period: "2004 - 2010",
    },
  ],
};

export const professionalData = {
  title: "Work experience",
  experiences: [
    {
      role: "Lawyer",
      description:
        "Livoberezhny Kyiv local center for providing free secondary legal assistance",
      achivements: [
        "Obtaining a lawyers sertificate and a positive court decision on a case",
        "Educating and defending clients regarding their rights.",
        "Effectively represented clients in civil court proceedings.",
        "Prepared notices and made appearances in court.",
      ],
      period: "2019 - 2022",
    },
  ],
};
