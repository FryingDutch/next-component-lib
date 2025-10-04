import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import RangeInput from "@/components/Atoms/Inputs/RangeInput";
import ReactDatePicker from "@/components/Atoms/Inputs/ReactDatePicker";

export type LabeledReactDatePickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledReactDatePicker = forwardRef<HTMLInputElement, LabeledReactDatePickerProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={ReactDatePicker} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledReactDatePicker;