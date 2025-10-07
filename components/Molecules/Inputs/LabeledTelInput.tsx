import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "@/components/Atoms/Inputs/PasswordInput";
import SearchInput from "@/components/Atoms/Inputs/SearchInput";
import TelInput from "@/components/Atoms/Inputs/TelInput";

export type LabeledTelInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledTelInput = forwardRef<HTMLInputElement, LabeledTelInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={TelInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledTelInput;