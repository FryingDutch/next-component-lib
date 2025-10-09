import cn from "@/utils/cn"
import React from "react";
import LabeledButton from "./LabeledButtons";
import RedirectButton, {RedirectButtonProps} from "@/components/Atoms/Buttons/RedirectButton";

export type LabeledRedirectButtonProps = {
  label: string;
  className?: string;
  labelClassName?: string;
  buttonProps: RedirectButtonProps;
}

const LabeledRedirectButton = (({label, className, labelClassName, buttonProps}: LabeledRedirectButtonProps): React.JSX.Element => {
    return (
    <LabeledButton
        ButtonComponent={RedirectButton as React.ComponentType<RedirectButtonProps>}
        buttonProps={buttonProps}
        className={className}
        labelClassName={labelClassName}
        label={label}
    />
    );
});

export default LabeledRedirectButton;