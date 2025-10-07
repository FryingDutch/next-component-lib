import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import RangeInput from "@/components/Atoms/Inputs/RangeInput";

export type LabeledRangeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledRangeInput = forwardRef<HTMLInputElement, LabeledRangeInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={RangeInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledRangeInput;