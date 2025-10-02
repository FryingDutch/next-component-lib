import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="text" className={cn("", className)} {...props} />
    );
});

export default TextInput;