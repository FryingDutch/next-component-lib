import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type TelInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const TelInput = forwardRef<HTMLInputElement, TelInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="tel" className={cn("", className)} {...props} />
    );
});

export default TelInput;