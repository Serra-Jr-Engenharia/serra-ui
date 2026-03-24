import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-200",
  {
    variants: {
      hoverEffect: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-md",
        glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-primary/50 dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
      },
    },
    defaultVariants: {
      hoverEffect: "none",
    },
  }
)

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, hoverEffect, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ hoverEffect, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

// Built-in Skeleton for loading states
function CardSkeleton({ className }: { className?: string }) {
  return (
    <Card className={cn("animate-pulse", className)}>
      <CardHeader className="gap-2">
        <div className="h-5 w-1/2 rounded-md bg-muted"></div>
        <div className="h-4 w-3/4 rounded-md bg-muted"></div>
      </CardHeader>
      <CardContent>
        <div className="h-20 w-full rounded-md bg-muted"></div>
      </CardContent>
      <CardFooter>
        <div className="h-9 w-24 rounded-md bg-muted"></div>
      </CardFooter>
    </Card>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardSkeleton,
}