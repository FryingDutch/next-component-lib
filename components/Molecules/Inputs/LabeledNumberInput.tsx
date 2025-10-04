import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import NumberInput from "@/components/Atoms/Inputs/NumberInput";

export type LabeledNumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledNumberInput = forwardRef<HTMLInputElement, LabeledNumberInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={NumberInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledNumberInput;