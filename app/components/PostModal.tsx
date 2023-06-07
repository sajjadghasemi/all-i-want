"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import myImageLoader from "./loader";
import { useEffect } from "react";

export let modalFlag = false;

const PostModal = ({ post }) => {
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <>
            <div
                onClick={() => router.back()}
                className="fixed z-10 w-full h-full top-0 left-0 bg-black opacity-75"
            ></div>
            <div className="fixed h-[60dvh] overflow-y-hidden flex flex-col gap-5 z-20 top-10 left-10 right-10 bg-gray-400 text-center justify-center items-center shadow-2xl rounded-2xl">
                <h3 className="text-lg">{post.name}</h3>
                <Image
                    src={post.image}
                    width="250"
                    height="250"
                    alt={post.name}
                    loader={myImageLoader}
                    priority
                    className="rounded-lg"
                />
            </div>
        </>
    );
};

export default PostModal;
