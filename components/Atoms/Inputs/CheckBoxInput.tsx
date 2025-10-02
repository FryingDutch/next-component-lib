import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type ColorInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="checkbox" className={cn("border-none", className)} {...props} />
    );
});

export default ColorInput;