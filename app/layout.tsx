import { Sidebar } from "./components/SideBar";
import "./globals.css";
// import DarkModeBtn from "./DarkModeBtn";

import { Providers } from "./Providers";
import { proskurinData } from "./data/my-info";

export const metadata = {
  title: "Proskurin_V CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col sm:flex-row">
        <Providers>
          {/* <DarkModeBtn /> */}

          <Sidebar data={proskurinData} />
          <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
