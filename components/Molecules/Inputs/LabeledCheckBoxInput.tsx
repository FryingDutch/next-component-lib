import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import CheckBoxInput from "@/components/Atoms/Inputs/CheckBoxInput";

export type LabeledCheckBoxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledCheckBoxInput = forwardRef<HTMLInputElement, LabeledCheckBoxInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={CheckBoxInput} ref={ref} type="checkbox" className={cn("", className)} inputClassName="" labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledCheckBoxInput;