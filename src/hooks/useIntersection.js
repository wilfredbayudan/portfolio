import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    const currentElement = element.current;

    element.current && observer.observe(element.current);

    return () => observer.unobserve(currentElement);
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
