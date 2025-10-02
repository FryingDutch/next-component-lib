import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type DateTimeLocalInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const DateTimeLocalInput = forwardRef<HTMLInputElement, DateTimeLocalInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="datetime-local" className={cn("", className)} {...props} />
    );
});

export default DateTimeLocalInput;