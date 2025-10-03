import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type CheckBoxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const CheckBoxInput = forwardRef<HTMLInputElement, CheckBoxInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="checkbox" className={cn("h-4", className)} {...props} />
    );
});

export default CheckBoxInput;