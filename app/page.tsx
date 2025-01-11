import { Suspense } from "react";

const HomePage = async () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <p>User does not exist.</p>
      <p>Please login to see more information!</p>
    </Suspense>
  );
};

export default HomePage;
