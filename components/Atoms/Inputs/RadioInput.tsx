import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="radio" className={cn("cursor-pointer max-h-5", className)} {...props} />
    );
});

export default RadioInput;