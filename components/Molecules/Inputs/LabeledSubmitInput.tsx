import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import SubmitInput from "@/components/Atoms/Inputs/SubmitInput";

export type LabeledSubmitInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledSubmitInput = forwardRef<HTMLInputElement, LabeledSubmitInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={SubmitInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledSubmitInput;