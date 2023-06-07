"use client";

import React from "react";
import { useTheme } from "next-themes";

const ChangeThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        console.log(theme);
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    return (
        <div className="cursor-pointer hover:underline" onClick={changeTheme}>
            Change Theme
        </div>
    );
};

export default ChangeThemeButton;
