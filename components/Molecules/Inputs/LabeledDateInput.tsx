import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import ColorInput from "@/components/Atoms/Inputs/ColorInput";
import DateInput from "@/components/Atoms/Inputs/DateInput";

export type LabeledDateInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledDateInput = forwardRef<HTMLInputElement, LabeledDateInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={DateInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledDateInput;