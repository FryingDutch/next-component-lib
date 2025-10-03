import cn from "@/utils/cn"
import { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({className, ...props}, ref) => {
    return (
        <input ref={ref} {...props} className={cn("border-2 border-primary bg-background pl-1 h-8", className)}/>
    );
});

export default Input;
