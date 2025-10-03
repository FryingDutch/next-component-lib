import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type RangeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="range" className={cn("cursor-pointer", className)} {...props} />
    );
});

export default RangeInput;