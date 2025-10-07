import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "@/components/Atoms/Inputs/PasswordInput";

export type LabeledPasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledPasswordInput = forwardRef<HTMLInputElement, LabeledPasswordInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={PasswordInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledPasswordInput;