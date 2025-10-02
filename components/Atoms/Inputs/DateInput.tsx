import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type DateInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="date" className={cn("", className)} {...props} />
    );
});

export default DateInput;