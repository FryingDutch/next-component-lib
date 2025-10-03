import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type SubmitInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const SubmitInput = forwardRef<HTMLInputElement, SubmitInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="submit" className={cn("", className)} {...props} />
    );
});

export default SubmitInput;