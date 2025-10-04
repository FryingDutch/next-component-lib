import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledInput from "./LabeledInput";
import EmailInput from "@/components/Atoms/Inputs/EmailInput";
import FileInput from "@/components/Atoms/Inputs/File";

export type LabeledFileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledFileInput = forwardRef<HTMLInputElement, LabeledFileInputProps>(
    ({className, labelClassName, ...props}, ref) => {
    return (
        <LabeledInput input={FileInput} ref={ref} className={cn("", className)} labelClassName={cn("", labelClassName)}{...props} />
    );
});

export default LabeledFileInput;