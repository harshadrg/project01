import { useMemo } from "react";
import useInView from "../../hooks/UseInView.js";

export function AnimateOnScroll({ 
  children, 
  className = "",
  delay = 0,
  duration = 700,
  triggerOnce = true,
  threshold = 0.15,
  animation = "fadeUp",
  easing = "ease-out",
  distance = 48,
  scale = 0.95
}) {
  const [ref, inView] = useInView({ threshold, triggerOnce });

  // Memoize animation presets to avoid recreation on every render
  const animations = useMemo(() => ({
    fadeUp: {
      visible: "translateY(0) scale(1)",
      hidden: `translateY(${distance}px) scale(${scale})`
    },
    fadeDown: {
      visible: "translateY(0) scale(1)",
      hidden: `translateY(-${distance}px) scale(${scale})`
    },
    fadeIn: {
      visible: "scale(1)",
      hidden: `scale(${scale})`
    },
    slideLeft: {
      visible: "translateX(0)",
      hidden: `translateX(${distance}px)`
    },
    slideRight: {
      visible: "translateX(0)",
      hidden: `translateX(-${distance}px)`
    },
    zoomIn: {
      visible: "scale(1)",
      hidden: "scale(0.8)"
    },
    rotate: {
      visible: "rotate(0deg) scale(1)",
      hidden: "rotate(-10deg) scale(0.9)"
    }
  }), [distance, scale]);

  const currentAnimation = animations[animation] || animations.fadeUp;

  // Memoize style object
  const animationStyle = useMemo(() => ({
    opacity: inView ? 1 : 0,
    transform: inView ? currentAnimation.visible : currentAnimation.hidden,
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    willChange: inView ? "auto" : "opacity, transform"
  }), [inView, currentAnimation, delay, duration]);

  return (
    <div
      ref={ref}
      className={`transition-all ${easing} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
}

/**
 * Preset for staggered list animations
 * Automatically adds increasing delays to children
 * 
 * @example
 * <AnimateOnScroll.Stagger staggerDelay={100}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </AnimateOnScroll.Stagger>
 */
AnimateOnScroll.Stagger = function AnimateStagger({
  children,
  staggerDelay = 100,
  animation = "fadeUp",
  ...props
}) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <AnimateOnScroll
          key={index}
          delay={index * staggerDelay}
          animation={animation}
          {...props}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
};