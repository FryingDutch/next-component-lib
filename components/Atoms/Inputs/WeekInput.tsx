import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type WeekInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const WeekInput = forwardRef<HTMLInputElement, WeekInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="month" className={cn("cursor-pointer", className)} {...props} />
    );
});

export default WeekInput;