"use client";

import { useState } from "react";
import { cn } from "../../lib/utils"

interface FlipCardProps {
  /** Conteúdo da parte da frente do cartão */
  front: React.ReactNode;
  /** Conteúdo da parte de trás do cartão */
  back: React.ReactNode;
  /** Classes adicionais para controlar altura/largura */
  className?: string;
  /** Se true, o cartão vira ao passar o mouse por cima */
  flipOnHover?: boolean;
  /** Se true, o cartão vira ao ser clicado */
  flipOnClick?: boolean;
}

export function FlipCard({
  front,
  back,
  className,
  flipOnHover = true,
  flipOnClick = true,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "group relative w-full h-[400px] [perspective:1000px] cursor-pointer",
        className
      )}
      onClick={() => flipOnClick && setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
          flipOnHover && !isFlipped ? "md:group-hover:[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Frente do Cartão */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          {front}
        </div>

        {/* Verso do Cartão */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}