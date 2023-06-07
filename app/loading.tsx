"use client";

const Loading = () => {
    return (
        <div className="fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center gap-3">
            <div className="h-16 w-1/6 bg-gray-300 opacity-90 animate-pulse animate-bounce flex justify-center items-center border-4 border-gray-950 rounded-xl dark:text-black">
                Loading...
            </div>
        </div>
    );
};

export default Loading;
