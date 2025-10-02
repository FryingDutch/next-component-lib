import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="password" className={cn("", className)} {...props} />
    );
});

export default PasswordInput;