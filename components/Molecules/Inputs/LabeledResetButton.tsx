import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import RangeInput from "@/components/Atoms/Inputs/RangeInput";
import ResetInput from "@/components/Atoms/Inputs/Reset";

export type LabeledResetInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledResetInput = forwardRef<HTMLInputElement, LabeledResetInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={ResetInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledResetInput;