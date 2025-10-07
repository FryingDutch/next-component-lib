import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "@/components/Atoms/Inputs/PasswordInput";
import SearchInput from "@/components/Atoms/Inputs/SearchInput";

export type LabeledSearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledSearchInput = forwardRef<HTMLInputElement, LabeledSearchInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={SearchInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledSearchInput;