"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../lib/getPosts";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../loading";
import Link from "next/link";

const Posts = ({ posts }) => {
    const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        initialData: posts,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.info.next) {
                return pages.length + 1;
            }
        },
    });

    if (!data.pages) return <Loading />;

    return (
        <div className="container mt-5 mx-auto">
            {status === "success" && (
                <InfiniteScroll
                    dataLength={data.pages.length}
                    next={fetchNextPage}
                    hasMore={hasNextPage}
                    loader={
                        <div className="container mx-auto flex items-center justify-center gap-3">
                            <div className="h-16 w-1/2 bg-gray-500 opacity-90 animate-pulse"></div>
                        </div>
                    }
                >
                    {data?.pages?.map((group, i) => (
                        <div
                            className="flex flex-col gap-y-6 justify-center items-center text-center"
                            key={i}
                        >
                            {group.results.map((project) => (
                                <Link
                                    href={`/${project.id.toString()}`}
                                    key={project.id}
                                    className="w-1/5 p-4 rounded-lg ring-2 cursor-pointer bg-gray-300 dark:bg-gray-800"
                                >
                                    <h5>{project.id + " - " + project.name}</h5>
                                </Link>
                            ))}
                        </div>
                    ))}
                </InfiniteScroll>
            )}
            <>{!hasNextPage && "Nothing more to load"}</>
        </div>
    );
};

export default Posts;
