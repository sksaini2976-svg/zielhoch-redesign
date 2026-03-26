import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
        const elements = ref.current.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
};
