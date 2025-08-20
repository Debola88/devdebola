"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteSkillsCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  enableManualScroll = true,
  className,
}: {
  items: {
    name: string;
    icon: string;
    level?: string;
    description?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  enableManualScroll?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  useEffect(() => {
    addAnimation();
    
    if (enableManualScroll) {
      setupManualScroll();
    }
  }, [enableManualScroll]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Only duplicate if we haven't already
      if (scrollerContent.length === items.length) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      setStart(true);
    }
  }

  function setupManualScroll() {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    // let animationId: number;

    // Get current transform value
    const getCurrentTransform = () => {
      const style = window.getComputedStyle(scroller);
      const matrix = style.transform;
      if (matrix === 'none') return 0;
      const values = matrix.split('(')[1].split(')')[0].split(',');
      return parseFloat(values[4]) || 0;
    };

    // Set transform manually
    const setTransform = (x: number) => {
      // Keep within bounds for infinite effect
      const maxWidth = scroller.scrollWidth / 2; // Half because we duplicated
      const normalizedX = ((x % maxWidth) + maxWidth) % maxWidth;
      scroller.style.transform = `translateX(${-normalizedX}px)`;
    };

    // Mouse events for drag scrolling
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      setIsManualScrolling(true);
      setIsPaused(true);
      startX = e.pageX;
      scrollLeft = getCurrentTransform();
      container.style.cursor = 'grabbing';
      
      // Disable CSS animation temporarily
      scroller.style.animation = 'none';
    };

    const handleMouseLeave = () => {
      if (isDown) {
        isDown = false;
        setIsManualScrolling(false);
        // Resume animation after a short delay
        setTimeout(() => {
          scroller.style.animation = '';
          setIsPaused(false);
        }, 1000);
        container.style.cursor = 'grab';
      }
    };

    const handleMouseUp = () => {
      if (isDown) {
        isDown = false;
        setIsManualScrolling(false);
        // Resume animation after a short delay
        setTimeout(() => {
          scroller.style.animation = '';
          setIsPaused(false);
        }, 1000);
        container.style.cursor = 'grab';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      setTransform(scrollLeft - walk);
    };

    // Wheel event for scroll wheel
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setIsManualScrolling(true);
      setIsPaused(true);
      
      // Disable CSS animation
      scroller.style.animation = 'none';
      
      const currentTransform = getCurrentTransform();
      setTransform(currentTransform - e.deltaY);
      
      // Resume animation after scrolling stops
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        setIsManualScrolling(false);
        scroller.style.animation = '';
        setIsPaused(false);
      }, 1500);
    };

    let wheelTimeout: NodeJS.Timeout;

    // Add event listeners
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    const handleTouchStart = (e: TouchEvent) => {
      setIsManualScrolling(true);
      setIsPaused(true);
      scroller.style.animation = 'none';
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = getCurrentTransform();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX) return;
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.5;
      setTransform(touchScrollLeft + walk);
    };

    const handleTouchEnd = () => {
      touchStartX = 0;
      setTimeout(() => {
        setIsManualScrolling(false);
        scroller.style.animation = '';
        setIsPaused(false);
      }, 1000);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }

  const getAnimationDuration = () => {
    if (speed === "fast") return "20s";
    if (speed === "normal") return "40s";
    return "80s";
  };

  const getAnimationDirection = () => {
    return direction === "left" ? "normal" : "reverse";
  };

  return (
    <div className="w-[95%] overflow-hidden">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 overflow-hidden",
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          enableManualScroll && "cursor-grab select-none",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-6 py-4 w-max",
            start && !isPaused && "animate-scroll test-scroll",
            pauseOnHover && !isManualScrolling && "hover:[animation-play-state:paused]"
          )}
          style={{
            width: "max-content",
            animationDuration: getAnimationDuration(),
            animationDirection: getAnimationDirection(),
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {items.map((item, idx) => (
            <li
              className="group relative w-[200px] h-[240px] shrink-0 rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 hover:scale-105 overflow-hidden pointer-events-auto"
              key={`${item.name}-${idx}`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                {/* Icon container */}
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300 border border-zinc-600">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'fallback-text text-xl font-bold text-zinc-400';
                        fallback.textContent = item.name.charAt(0).toUpperCase();
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                
                {/* Skill name */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* Skill level (optional) */}
                {item.level && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-700 rounded-full mb-2 group-hover:bg-zinc-600 transition-colors duration-300">
                    {item.level}
                  </span>
                )}
                
                {/* Description (optional) */}
                {item.description && (
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {item.description}
                  </p>
                )}
              </div>
              
              {/* Subtle border glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};