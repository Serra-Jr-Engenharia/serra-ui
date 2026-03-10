import Image from "next/image";
import { cn } from "../../lib/utils"

// 1. Em vez de usar strings genéricas, nós IMPORTAMOS os arquivos reais.
// O bundler (Webpack/Vite) vai descobrir o caminho exato deles para nós!
import LogoSerra from "../../../public/LogoSerra.svg";
import LogoENome from "../../../public/LogoENome.svg";

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
        src={LogoSerra}
        alt="Símbolo da Serra Jr"
        width={40}
        height={40}
        unoptimized // 2. Desliga o servidor de redimensionamento para SVGs
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <Image
      src={LogoENome}
      alt="Logótipo Completo da Serra Jr"
      width={150}
      height={50}
      unoptimized // Desliga o servidor de redimensionamento para SVGs
      className={cn("object-contain", className)}
    />
  );
}