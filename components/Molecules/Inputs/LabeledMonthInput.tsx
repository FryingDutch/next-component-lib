import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import NumberInput from "@/components/Atoms/Inputs/NumberInput";
import MonthInput from "@/components/Atoms/Inputs/MonthInput";

export type LabeledMonthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledMonthInput = forwardRef<HTMLInputElement, LabeledMonthInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={MonthInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledMonthInput;