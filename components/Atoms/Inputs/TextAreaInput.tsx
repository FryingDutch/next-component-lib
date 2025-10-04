import cn from "@/utils/cn"
import { forwardRef } from "react";

export type TextAreaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
    ({className, ...props}, ref) => {
    return (
        <textarea ref={ref} {...props} className={cn("border-1 border-primary/30 bg-white pl-1", className)}/>
    );
});

export default TextAreaInput;
