import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import SubmitDataButton from "@/components/Atoms/Buttons/SubmitDataButton";

export type LabeledSubmitDataButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
}

const LabeledSubmitDataButton = forwardRef<HTMLInputElement, LabeledSubmitDataButtonProps>(
    ({label, buttonLabel, className, labelClassName, ...props}, ref) => {
    return (
        <LabeledButton button={SubmitDataButton} buttonLabel={buttonLabel} label={label} />
    );
});

export default LabeledSubmitDataButton;