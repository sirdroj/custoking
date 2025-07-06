import React, { useEffect, useState, useRef } from "react";
import BodyContent from "./BodyContent";
import ResizeObserver from "resize-observer-polyfill";

export const Body = () => {
  const containerRef = useRef(null);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const updateImageCount = () => {
      if (container) {
        const height = container.offsetHeight;
        const count = Math.ceil(height /160)-1; // 80px per image
        setImageCount(count);
      }
    };

    updateImageCount();

    const observer = new ResizeObserver(() => {
      updateImageCount();
    });

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  return (
   
    <div className=" flex justify-center w-full mb-3" ref={containerRef}>
      <img
        className="absolute right-0 h-[161px]"
        src="./home/sidepaternstart.svg"
        alt="start-pattern-right"
      />
      {[...Array(imageCount)].map((_, i) => (
        <img
          key={`r-${i}`}
          src="./home/sidepatern.svg"
          className="absolute right-0 w-20"
          style={{ top: `${(i + 1) * 160 + 50}px` }} // more natural spacing
          alt={`pattern-right-${i}`}
        />
      ))}

      <img
        className="absolute left-0  h-[161px] transform -scale-x-100"
        src="./home/sidepaternstart.svg"
        alt="start-pattern-left"
      />
      {[...Array(imageCount)].map((_, i) => (
        <img
          key={`l-${i}`}
          src="./home/sidepatern.svg"
          className="absolute left-0 rotate-180 w-20"
          style={{ top: `${(i + 1) * 160 + 50}px` }}
          alt={`pattern-left-${i}`}
        />
      ))}
      
      <div>

      <BodyContent />
      </div>
    </div>
    
  );
};
