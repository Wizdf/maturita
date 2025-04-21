import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const elUnderPointer = document.elementFromPoint(clientX, clientY);

    // If the pointer is over an interactive element, skip showing the trail
    if (elUnderPointer && isInteractive(elUnderPointer)) {
      return;
    }

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current = { x: clientX, y: clientY };
      renderNextImage();
    }
  };

  const isInteractive = (el) => {
    const interactiveTags = [
      "BUTTON",
      "A",
      "INPUT",
      "TEXTAREA",
      "SELECT",
      "LABEL",
    ];
    if (interactiveTags.includes(el.tagName)) return true;

    const isFocusable = el.hasAttribute("tabindex") || el.tabIndex >= 0;
    const hasOnClick =
      typeof el.onclick === "function" ||
      el.getAttribute("role") === "button" ||
      el.getAttribute("role") === "link";

    return isFocusable || hasOnClick;
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const index = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${index}"]`;
    const el = document.querySelector(selector);

    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) rotate(${index % 2 ? rotation : -rotation}deg)`,
          `translate(-50%, -50%) scale(1) rotate(${index % 2 ? -rotation : rotation}deg)`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current += 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}
      {images.map((img, index) => (
        <img
          key={index}
          data-mouse-move-index={index}
          src={img}
          alt={`trail-${index}`}
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
        />
      ))}
    </div>
  );
};

export default MouseImageTrail;
