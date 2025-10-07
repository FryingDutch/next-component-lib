import React, { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";
import cn from "@/utils/cn";

export type TimeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="time" className={cn("cursor-pointer", className)} {...props} />
    );
});

export default TimeInput;