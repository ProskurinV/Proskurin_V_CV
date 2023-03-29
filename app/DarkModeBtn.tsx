"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system " ? systemTheme : theme;

  return (
    <div className="flex justify-end absolute right-4 top-4 z-10">
      <select
        className="hidden "
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      {currentTheme === "dark" ? (
        <BsFillMoonFill
          className=" h-8 w-8 cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
export default DarkModeBtn;
