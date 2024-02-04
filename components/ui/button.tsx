// your-button.jsx
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`${styles.button} ${className ? className : ""}`.trim()}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
