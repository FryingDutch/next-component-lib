import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "@/components/Atoms/Inputs/PasswordInput";
import RadioInput from "@/components/Atoms/Inputs/RadioInput";

export type LabeledRadioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledRadioInput = forwardRef<HTMLInputElement, LabeledRadioInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={RadioInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledRadioInput;