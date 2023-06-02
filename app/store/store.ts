"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
    reducer: { darkMode: themeSlice },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
