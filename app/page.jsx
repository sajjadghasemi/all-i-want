import React, { Suspense } from "react";
import Users from "./components/Users";
import Loading from "./loading";

const HomePage = async () => {
    return (
        <Suspense fallback={<Loading />}>
            <Users />
        </Suspense>
    );
};

export default HomePage;
