import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import EmailInput from "@/components/Atoms/Inputs/EmailInput";

export type LabeledEmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledEmailInput = forwardRef<HTMLInputElement, LabeledEmailInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={EmailInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledEmailInput;