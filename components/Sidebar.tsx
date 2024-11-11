import { useTheme } from "@/src/context/ThemeContext";
import { MenuIcon } from "lucide-react";
import React from "react";

function Sidebar(props) {
  const { state } = useTheme();
  return (
    <div className="w-[8%] flex flex-col justify-around fixed top-0 left-0 h-full bg-background dark:bg-card text-foreground dark:text-card-foreground transition-all duration-500 ease-in-out items-center">
      <div className="mb-4 text-xl">Logo</div>
      <div className="mb-4">
        <MenuIcon color={state.theme === "dark" ? "white" : "black"} />
      </div>
      <div>
        <button className="bg-muted text-muted-foreground dark:bg-accent dark:text-accent-foreground rounded">
          Action
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
