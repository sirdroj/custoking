import React, { useEffect, useState, useRef } from "react";
import BodyContent from "./BodyContent";

export const Body = () => {
  const containerRef = useRef(null);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      const count = Math.ceil(height / 80);
      setImageCount(count);
    }
  }, []);

  return (
    <div className="relative flex justify-center h-screen w-full" ref={containerRef}>
      {[...Array(imageCount)].map((_, i) => (
        <img
          key={i}
          src="./home/sidepatern.svg"
          className="absolute right-0 w-20"
          style={{ top: `${(1 + i) * 160}px` }}
          alt={`pattern-${i}`}
        />
      ))}
      <img
        className="absolute right-0 h-40 "
        src="./home/sidepaternstart.svg"
      />
      <img
        className="absolute left-0 h-40 transform -scale-x-100"
        src="./home/sidepaternstart.svg"
      />
      {[...Array(imageCount)].map((_, i) => (
        <img
          key={i}
          src="./home/sidepatern.svg"
          className="absolute left-0 rotate-180 w-20"
          style={{ top: `${(1 + i) * 160}px` }}
          alt={`pattern-${i}`}
        />
      ))}
      <BodyContent />
    </div>
  );
};
