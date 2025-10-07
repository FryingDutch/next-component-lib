import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import TextAreaInput from "@/components/Atoms/Inputs/TextAreaInput";

export type LabeledTextAreaInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledTextAreaInput = forwardRef<HTMLInputElement, LabeledTextAreaInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={TextAreaInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledTextAreaInput;