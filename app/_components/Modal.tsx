"use client";

import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <div className="z-10 bg-black/30 fixed w-full h-screen overflow-hidden top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="z-20 bg-white w-1/2">
        <span
          className="text-red-600 p-1 cursor-pointer font-bold"
          onClick={handleOpenChange}
        >
          &#x2715;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
