"use client";

import React, { useState } from "react";

const Page = () => {
    const [active, setActive] = useState(1);
    return (
        <div className="flex flex-col gap-32">
            <ul className="flex mt-16 justify-center">
                <li
                    className={`relative transition-all duration-500 w-[150px] text-center text-sm font-light italic after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:bg-gray-900 after:rounded-full after:z-50`}
                >
                    Address
                </li>
                <li
                    className={`relative transition-all duration-500 w-[150px] text-center text-sm font-light italic before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:rounded-full after:z-50 
                    ${
                        active > 1 || active === 2
                            ? "before:bg-gray-900 after:bg-gray-900"
                            : "before:bg-gray-300 after:bg-gray-300"
                    }`}
                >
                    Payment
                </li>
                <li
                    className={`relative transition-all duration-500 w-[150px] text-center text-sm font-light italic before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:rounded-full after:z-50 
                    ${
                        active > 2 || active === 3
                            ? "before:bg-gray-900 after:bg-gray-900"
                            : "before:bg-gray-300 after:bg-gray-300"
                    }`}
                >
                    Final Step
                </li>
            </ul>
            <div className="flex gap-3 justify-center">
                <button
                    onClick={() => setActive(active + 1)}
                    className={`bg-green-800 text-white py-4 px-8 ${
                        active === 3 && "cursor-not-allowed disabled:bg-green-400"
                    }`}
                    disabled={active === 3}
                >
                    Next
                </button>
                <button
                    onClick={() => setActive(active - 1)}
                    className={`bg-red-800 text-white py-4 px-8 ${
                        active === 1 && "cursor-not-allowed disabled:bg-red-500"
                    }`}
                    disabled={active === 1}
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Page;
