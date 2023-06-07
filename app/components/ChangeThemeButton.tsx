"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ChangeThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <select className="px-2 border-2 rounded-lg border-gray-400" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    );
};

export default ChangeThemeButton;
