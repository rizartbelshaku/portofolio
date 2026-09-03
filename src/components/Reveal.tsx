import { useEffect, useRef, useState, type ReactNode } from "react";

const Reveal = ({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { animation: `lcUp .65s cubic-bezier(.22,.7,.3,1) ${index * 80}ms forwards` }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  );
};

export default Reveal;
