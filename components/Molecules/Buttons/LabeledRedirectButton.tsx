import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import ActionButton from "@/components/Atoms/Buttons/ActionButton";

export type LabeledRedirectButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
}

const LabeledRedirectButton = forwardRef<HTMLInputElement, LabeledRedirectButtonProps>(
    ({label, buttonLabel, className, labelClassName, ...props}, ref) => {
    return (
        <LabeledButton button={ActionButton} buttonLabel={buttonLabel} label={label} />
    );
});

export default LabeledRedirectButton;