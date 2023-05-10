"use client";
import { useState } from "react";

export const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("tech");

  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");

  const setTabsAlign = (tab) => (tab === "tech" ? "text-left" : "text-right");

  const tabs = (
    <div className="flex" id="skills">
      {["tech", "soft"].map((element) => (
        <button
          key={element}
          type="button"
          className={`btn ${setBg(element)} ${setTabsAlign(element)}`}
          onClick={() => setActiveTab(element)}
        >
          {element} SKILLS
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      id="skills"
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "tech" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map((skill, index) => (
        <li key={index} className="skill">
          <div className="flex gap-4 justify-center items-center p-2">
            {skill.img}
            {skill.name}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="skills">
      {tabs}
      {content}
    </section>
  );
};
