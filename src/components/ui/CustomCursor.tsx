import React from "react";

export const CustomCursor: React.FC = () => {
  return (
    <>
      <div className="cursor-dot fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[100] translate-x-[-50%] translate-y-[-50%]" />
      <div className="cursor-ring fixed top-0 left-0 w-8 h-8 border border-gold/40 rounded-full pointer-events-none z-[99] translate-x-[-50%] translate-y-[-50%]" />
    </>
  );
};
