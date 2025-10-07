import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import UrlInput from "@/components/Atoms/Inputs/UrlInput";

export type LabeledUrlInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledUrlInput = forwardRef<HTMLInputElement, LabeledUrlInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={UrlInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledUrlInput;