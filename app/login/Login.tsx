"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const formHandler = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res.token);
                setCookie("token", res.token, { path: "/" });
                router.refresh();
                router.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <form onSubmit={formHandler} className="flex gap-2 justify-center mt-6">
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="bg-red-200"
                type="text"
                name="username"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-red-200"
                type="password"
                name="password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
