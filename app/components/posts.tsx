"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../lib/getPosts";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../loading";

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
        <div className="container">
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
                        <React.Fragment key={i}>
                            {group.results.map((project, i) => (
                                <div
                                    key={i}
                                    className="col-12 col-sm-12 col-md-6 my-20"
                                >
                                    <div className="card border-0 shadow text-center">
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">
                                                {project.id +
                                                    " " +
                                                    project.name}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </InfiniteScroll>
            )}
            <>{!hasNextPage && "Nothing more to load"}</>
        </div>
    );
};

export default Posts;
