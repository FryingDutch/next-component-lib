import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type ResetInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const ResetInput = forwardRef<HTMLInputElement, ResetInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="reset" className={cn("", className)} {...props} />
    );
});

export default ResetInput;