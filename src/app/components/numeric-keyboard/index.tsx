// NumericKeyboard.tsx

import BackspaceIcon from "@/app/assets/icons/chevron";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const NumericKeyboard: React.FC<NumericKeyboardProps> = ({
  onKeyPress,
  onClose,
}) => {
  const keyboardRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close keyboard
  const handleClickOutside = (event: MouseEvent) => {
    if (
      keyboardRef.current &&
      !keyboardRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClick = (key: string) => {
    onKeyPress(key);
  };
  const handleDelete = () => {
    onKeyPress("delete");
  };
  const keyboard = (
    <div
      ref={keyboardRef}
      className="desktop-sm:hidden block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 drop-shadow-2xl pb-5 rounded-t-3xl"
    >
      <div className="grid grid-cols-3 gap-1 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "000", 0, "del"].map((key) => {
          if (key !== "del")
            return (
              <button
                key={key}
                className="bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-2xl font-black text-gray-700 py-2 rounded-full"
                onClick={() => handleClick(key.toString())}
              >
                <div>{key}</div>
              </button>
            );
          return (
            <button
              className="bg-white items-center flex justify-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-2xl font-black text-gray-700 py-2 rounded-full"
              onClick={handleDelete}
            >
              <BackspaceIcon color="black" size={32} />
            </button>
          );
        })}
      </div>
    </div>
  );

  return createPortal(keyboard, document.body);
};

export default NumericKeyboard;
