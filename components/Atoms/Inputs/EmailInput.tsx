import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="email" className={cn("", className)} {...props} />
    );
});

export default EmailInput;