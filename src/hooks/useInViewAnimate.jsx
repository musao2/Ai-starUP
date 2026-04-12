import { useEffect, useRef, useState } from 'react';

function useInViewAnimate(options = { threshold: 0.1, rootMargin: '0px' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return {
    ref,
    isVisible,
    containerClassName: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    transitionClassName: 'transition-all duration-700 ease-out',
  };
}

export default useInViewAnimate;
