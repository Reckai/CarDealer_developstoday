"use client";
import Link from "next/link";
import React from "react";

interface ButtonComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
  href: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  isDisabled,
  href,
  className,
}) => {
  return (
    <button
      className={`bg-[#5b58fb] w-full  rounded py-2 ${
        isDisabled ? "bg-[#7d7cd0] cursor-not-allowed" : ""
      } ${className}`}
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault();
        }
      }}
    >
      <Link
        className={`block w-full h-full ${
          isDisabled ? "pointer-events-none text-gray-500" : ""
        }`}
        href={href}
      >
        {children}
      </Link>
    </button>
  );
};

export default ButtonComponent;
