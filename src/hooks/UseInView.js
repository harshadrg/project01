import { useEffect, useRef, useState,  useCallback  } from "react";

export default function useInView(options = {}) {
  const { 
    threshold = 0.2, 
    rootMargin = "0px", 
    triggerOnce = false,
    root = null,
    onEnter = null,
    onLeave = null
  } = options;
  
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState(null);
  const observerRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  // Memoize callback to prevent unnecessary observer recreations
  const handleIntersection = useCallback((entries) => {
    const [currentEntry] = entries;
    const isIntersecting = currentEntry.isIntersecting;
    
    setEntry(currentEntry);
    setInView(isIntersecting);

    // Fire callbacks
    if (isIntersecting && onEnter && !hasTriggeredRef.current) {
      onEnter(currentEntry);
    } else if (!isIntersecting && onLeave && hasTriggeredRef.current) {
      onLeave(currentEntry);
    }

    // Track if we've triggered for triggerOnce logic
    if (isIntersecting) {
      hasTriggeredRef.current = true;
    }

    // Disconnect observer after first trigger if triggerOnce is enabled
    if (isIntersecting && triggerOnce && observerRef.current) {
      observerRef.current.disconnect();
    }
  }, [onEnter, onLeave, triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already triggered and triggerOnce is true, don't observe again
    if (triggerOnce && hasTriggeredRef.current) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported in this browser');
      setInView(true); // Fallback: assume visible
      return;
    }

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      { threshold, rootMargin, root }
    );

    observerRef.current.observe(element);

    // Cleanup: disconnect observer when component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, root, triggerOnce, handleIntersection]);

  return [ref, inView, entry];
}