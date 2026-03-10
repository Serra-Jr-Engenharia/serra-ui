import Image from "next/image";
import { cn } from "../../lib/utils"

interface LogoProps {
  /** Escolha entre a logo completa com texto ou apenas o símbolo */
  variant?: "completa" | "simbolo";
  /** Classes extras do Tailwind para ajustar margens ou tamanhos, se necessário */
  className?: string;
}

export function Logo({ variant = "completa", className }: LogoProps) {
  if (variant === "simbolo") {
    return (
      <Image
        src="/LogoSerra.svg"
        alt="Símbolo da Serra Jr"
        width={40}
        height={40}
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <Image
      src="/LogoENome.svg"
      alt="Logótipo Completo da Serra Jr"
      width={150}
      height={50}
      className={cn("object-contain", className)}
    />
  );
}