import cn from "@/utils/cn"
import React from "react";
import LabeledButtons from "./LabeledButtons";
import RedirectButton from "@/components/Atoms/Buttons/RedirectButton";

export type LabeledRedirectButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  href: string,
  label: string;
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
  altButton?: boolean
}

const LabeledRedirectButton = (({href, label, buttonLabel, className, labelClassName, altButton}: LabeledRedirectButtonProps): React.JSX.Element => {
    return (
        <LabeledButtons label={label} labelClassName={cn("", labelClassName)} className={cn("", className)}>
            <RedirectButton href={href} label={buttonLabel} altButton={altButton} />
        </LabeledButtons>
    );
});

export default LabeledRedirectButton;