"use server";

import getSession from "./dal";

const fetcher = async (
  endpoint,
  { needAuth = false, body = null, method = "GET" }
) => {
  try {
    const token = needAuth ? "ds" : null;
    const headers = {
      "Content-Type": "application/json",
    };
    if (needAuth && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    console.log(endpoint, { needAuth, body, method });

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
    //   options
    // );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    // const result = await response.json();
    // return result;
  } catch (error) {
    console.error("Error in fetch:", error);
    return undefined;
  }
};

export default fetcher;
