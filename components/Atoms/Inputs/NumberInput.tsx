import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";
import cn from "@/utils/cn";

export type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="number" className={cn("", className)} {...props} />
    );
});

export default NumberInput;