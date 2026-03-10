import { useEffect, useState } from "react";
import { cn } from "../../lib/utils"

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

function getTimeRemaining(endTime: Date) {
  const total = endTime.getTime() - new Date().getTime();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return (
    <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center [perspective:1000px]">
      <span
        className={cn(
          "text-4xl md:text-5xl font-bold transition-transform duration-500",
          isFlipping ? "animate-flip" : ""
        )}
      >
        {value.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div
    className="
      relative flex min-w-[90px] md:min-w-[110px] flex-col items-center 
      rounded-xl bg-primary px-6 py-6 text-primary-foreground shadow-md
      before:absolute before:left-[-6px] before:top-1/2 before:h-6 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-background before:content-['']
      after:absolute after:right-[-6px] after:top-1/2 after:h-6 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-background after:content-['']
    "
  >
    <AnimatedNumber value={value} />
    <span className="mt-1 text-xs md:text-sm font-semibold tracking-wider">{label}</span>
  </div>
);

export function Countdown({ targetDate, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      if (updated.total <= 0) clearInterval(timer);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn("flex flex-wrap justify-center gap-4 md:gap-8 p-4", className)}>
      <CountdownBox value={timeLeft.days} label="DIAS" />
      <CountdownBox value={timeLeft.hours} label="HORAS" />
      <CountdownBox value={timeLeft.minutes} label="MIN" />
      <CountdownBox value={timeLeft.seconds} label="SEG" />
    </div>
  );
}