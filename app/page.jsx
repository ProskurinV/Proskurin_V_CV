import { Sidebar } from "./components/SideBar";
import { Education } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Skills } from "./components/Skills";
import Experience from "./components/Experience";
import {
  proskurinData,
  education,
  lang,
  skills,
  professionalData,
} from "./data/my-info";

export default function Home() {
  return (
    <main>
      <Sidebar data={proskurinData} />
      <Education data={education} />
      <Languages data={lang} />
      <Skills data={skills} />
      <Experience data={professionalData} />
    </main>
  );
}
