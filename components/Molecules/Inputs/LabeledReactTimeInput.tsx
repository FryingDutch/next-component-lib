import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import ReactTimeInput from "@/components/Atoms/Inputs/ReactTimeInput";

export type LabeledReactTimePickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledReactTimePicker = forwardRef<HTMLInputElement, LabeledReactTimePickerProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={ReactTimeInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledReactTimePicker;