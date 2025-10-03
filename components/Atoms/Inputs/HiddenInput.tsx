import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type HiddenInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="hidden" className={cn("", className)} {...props} />
    );
});

export default HiddenInput;