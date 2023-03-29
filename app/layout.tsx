import "./globals.css";
// import DarkModeBtn from "./DarkModeBtn";
import Header from "./components/Header";

import { Providers } from "./Providers";

export const metadata = {
  title: "Proskurin_V CV",
  icons: {
    icon: "/icon-36x36.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col ">
        <Providers>
          {/* <DarkModeBtn /> */}
          <Header />
          <main className="grow-full p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
