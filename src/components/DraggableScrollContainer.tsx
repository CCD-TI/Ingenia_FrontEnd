import React, { useRef, useEffect } from 'react';

const DraggableScrollContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    container.addEventListener('mousedown', handleMouseDown);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto overflow-y-hidden  hide-scrollbar cursor-grab active:cursor-grabbing p-4"
    >
      {children}
    </div>
  );
};

export default DraggableScrollContainer;