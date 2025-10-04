import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import UrlInput from "@/components/Atoms/Inputs/UrlInput";

export type LabeledTimeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledTimeInput = forwardRef<HTMLInputElement, LabeledTimeInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={UrlInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledTimeInput;