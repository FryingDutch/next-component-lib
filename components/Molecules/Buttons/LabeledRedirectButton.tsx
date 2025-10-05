import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import ActionButton from "@/components/Atoms/Buttons/ActionButton";
import RedirectButton from "@/components/Atoms/Buttons/RedirectButton";

export type LabeledRedirectButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  href: string,
  label: string;
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
  altButton?: boolean
}

const LabeledRedirectButton = forwardRef<HTMLInputElement, LabeledRedirectButtonProps>(
    ({label, buttonLabel, className, labelClassName, altButton, ...props}, ref) => {
    return (
        <LabeledButton button={RedirectButton} buttonLabel={buttonLabel} label={label} className={cn("", className)} altButton={altButton} {...props}/>
    );
});

export default LabeledRedirectButton;