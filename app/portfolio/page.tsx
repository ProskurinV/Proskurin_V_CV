import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Page = () => {
  return (
    <section className="grow-full">
      <p>
        <Link href="/">Back to Home</Link>
      </p>
      <h2 className="text-center">Portfolio</h2>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};
export default Page;
