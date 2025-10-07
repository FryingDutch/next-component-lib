import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import WeekInput from "@/components/Atoms/Inputs/WeekInput";

export type LabeledWeekInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledWeekInput = forwardRef<HTMLInputElement, LabeledWeekInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={WeekInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledWeekInput;