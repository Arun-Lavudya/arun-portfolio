import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true);

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <div className={dark ? "dark-mode" : "light-mode"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
