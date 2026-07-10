'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 1, label: 'এই মাসে বই পড়া হয়েছে', value: 1200, suffix: '+' },
  { id: 2, label: 'নিবন্ধিত পাঠক', value: 8500, suffix: '+' },
  { id: 3, label: 'মোট বইয়ের সংগ্রহ', value: 340, suffix: '+' },
  { id: 4, label: 'পাঠকদের সন্তুষ্টি', value: 98, suffix: '%' },
];


function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
     
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target); 
      }
    }

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ stat, shouldStart }) {
  const count = useCountUp(stat.value, shouldStart);

  return (
    <div className="text-center container mx-auto">
      <p className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-white">{stat.label}</p>
    </div>
  );
}

const Readstat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-16 container mx-auto rounded-2xl my-5">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} shouldStart={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Readstat;