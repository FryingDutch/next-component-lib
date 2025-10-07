import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";

export type LabeledTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledTextInput = forwardRef<HTMLInputElement, LabeledTextInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={TextInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledTextInput;