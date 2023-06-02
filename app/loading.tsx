"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";

const Loading = () => {
    const theme = useSelector((state: RootState) => state.darkMode.darkToggle);
    return <div className="text-4xl text-red-800">Loading...</div>;
};

export default Loading;
