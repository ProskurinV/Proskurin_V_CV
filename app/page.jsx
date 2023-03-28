import { Inter } from "next/font/google";
import { Education } from "./components/AboutMe";
import { education, lang, skills, professionalData } from "./data/my-info";
import { Languages } from "./components/Languages";
import { Skills } from "./components/Skills";
import Experience from "./components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Education data={education} />
      <Languages data={lang} />
      <Skills data={skills} />
      <Experience data={professionalData} />
    </main>
  );
}
