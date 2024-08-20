import useTheme from "@/utils/useTheme";
import React from "react";

const Modal = ({ onClose, children }: any) => {
  const { theme } = useTheme();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        <button
          className={`absolute top-2 right-2 text-xl font-bold ${
            theme === "dark" ? " text-black " : "text-black"
          } `}
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
