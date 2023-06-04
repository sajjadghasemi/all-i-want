import React from "react";
import Posts from "../components/posts";
import { getPosts } from "../lib/getPosts";

const page = async () => {
    const initialData = await getPosts({ pageParam: 1 });
    return <Posts posts={initialData} />;
};

export default page;
