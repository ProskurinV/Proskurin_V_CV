import { Inter } from "next/font/google";
import DarkModeBtn from "./DarkModeBtn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>sjdflsk</h1>
      <DarkModeBtn />
    </main>
  );
}
