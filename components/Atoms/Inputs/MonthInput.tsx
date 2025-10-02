import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type MonthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const MonthInput = forwardRef<HTMLInputElement, MonthInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="month" className={cn("", className)} {...props} />
    );
});

export default MonthInput;