import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "duration-150 inline-flex items-center justify-center gap-xs rounded-xl border-1 font-semibold transition-colors ease-out",
  {
    variants: {
      variant: {
        primary:
          "border-brand-accent bg-brand-surface text-brand-text hover:bg-brand-hover",
        secondary:
          "border-surface-tertiary bg-surface-secondary text-text-primary hover:bg-surface-tertiary",
      },
      size: {
        default: "px-3sm py-xs text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label: string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, label, href, ...props },
    ref,
  ) => {
    const Comp = asChild || href ? "div" : "button";
    const content = (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        // @ts-ignore If this ever causes an error...I'm sorry. I don't know why this is here.
        ref={ref}
        {...props}
      >
        <span>{label}</span>
      </Comp>
    );

    if (href) {
      return <a href={href}>{content}</a>;
    }

    return content;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
