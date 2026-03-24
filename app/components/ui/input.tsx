"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "../../lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  error?: boolean | string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"
    const inputType = isPassword ? (showPassword ? "text" : "password") : type

    const renderEndIcon = () => {
      if (isPassword) {
        return (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )
      }
      return endIcon
    }

    const finalEndIcon = renderEndIcon()

    return (
      <div className="w-full">
        <div className="relative w-full flex items-center">
          {startIcon && (
            <div className="absolute left-3 text-muted-foreground [&_svg]:size-4">
              {startIcon}
            </div>
          )}
          <input
            type={inputType}
            ref={ref}
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              startIcon && "pl-9",
              finalEndIcon && "pr-9",
              error && "border-destructive focus-visible:ring-destructive/30",
              className
            )}
            {...props}
          />
          {finalEndIcon && (
            <div className="absolute right-3 text-muted-foreground [&_svg]:size-4">
              {finalEndIcon}
            </div>
          )}
        </div>
        {typeof error === "string" && (
          <p className="mt-1 text-xs text-destructive">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }