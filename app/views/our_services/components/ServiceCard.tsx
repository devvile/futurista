import { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: React.ReactNode;
  reverse?: boolean;
}

export function ServiceCard({tags, title, description, image, reverse = false }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-12 items-center mb-32 ${reverse ? 'md:grid-flow-dense' : ''}`}
    >
      <div className={reverse ? 'md:col-start-2' : ''}>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{title}</h3>
        <p className="text-foreground/60 text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-foreground/20 rounded-lg px-4 py-2 text-sm hover:bg-foreground/5 transition-colors text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
      >
        {image}
      </div>
    </div>
  );
}