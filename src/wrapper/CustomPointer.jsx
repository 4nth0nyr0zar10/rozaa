import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const angleRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);

      const dx = newPos.x - lastMousePos.current.x;
      const dy = newPos.y - lastMousePos.current.y;

      // Calculate and store angle
      if (dx !== 0 || dy !== 0) {
        angleRef.current = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      lastMousePos.current = newPos;

      if (!isVisible) {
        setFollowerPos(newPos);
        setIsVisible(true);
      }

      const target = e.target;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId;

    const follow = () => {
      setFollowerPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });

      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      {/* SVG Arrow Cursor */}
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        style={{
          position: 'fixed',
          top: mousePos.y,
          left: mousePos.x,
          transform: `translate(-50%, -50%) rotate(240deg)`,
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <path
          d="M2 2 L22 12 L2 22 L6 12 Z"
          fill= {isHoveringButton ? "#366e3a" : "#731ba6"}
        
        />
      </svg>
    </>
  );
}
