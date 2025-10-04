import cn from "@/utils/cn"
import { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({className, ...props}, ref) => {
    return (
        <input ref={ref} {...props} className={cn("border-1 border-primary/30 bg-white pl-1 h-8", className)}/>
    );
});

export default Input;
