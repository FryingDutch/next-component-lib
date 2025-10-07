import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import ColorInput from "@/components/Atoms/Inputs/ColorInput";

export type LabeledColorInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledColorInput = forwardRef<HTMLInputElement, LabeledColorInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={ColorInput} ref={ref} type="color" className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledColorInput;