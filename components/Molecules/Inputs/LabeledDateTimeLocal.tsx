import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import DateTimeLocalInput from "@/components/Atoms/Inputs/DateTimeLocalInput";

export type LabeledDateTimeLocalInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledDateTimeLocalInput = forwardRef<HTMLInputElement, LabeledDateTimeLocalInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={DateTimeLocalInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledDateTimeLocalInput;