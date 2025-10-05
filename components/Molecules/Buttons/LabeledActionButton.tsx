import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import ActionButton from "@/components/Atoms/Buttons/ActionButton";

export type LabeledActionButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
  altButton?: boolean
}

const LabeledActionButton = forwardRef<HTMLInputElement, LabeledActionButtonProps>(
    ({label, buttonLabel, className, labelClassName, altButton = false, ...props}, ref) => {
    return (
        <LabeledButton button={ActionButton} buttonLabel={buttonLabel} label={label} altButton={altButton} {...props}/>
    );
});

export default LabeledActionButton;