import { Inter } from "next/font/google";
import { Education } from "./components/AboutMe";
import { education } from "./data/my-info";
import { Languages } from "./components/Languages";
import { lang } from "./data/my-info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Education data={education} />
      <Languages data={lang} />
    </main>
  );
}
