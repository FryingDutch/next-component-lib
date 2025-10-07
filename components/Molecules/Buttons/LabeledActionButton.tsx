import LabeledButton, {LabeledButtonProps} from "./LabeledButtons";
import ActionButton from "@/components/Atoms/Buttons/ActionButton";
import React from "react";

export type LabeledActionButtonProps = Omit<LabeledButtonProps, "ButtonComponent"> & {
  label: string;
  className?: string;
  labelClassName?: string;
}

const LabeledActionButton = (({label, className, labelClassName, buttonProps}: LabeledActionButtonProps) => {
    return (
        <LabeledButton
            ButtonComponent={ActionButton}
            buttonProps={buttonProps}
            className={className}
            labelClassName={labelClassName}
            label={label}
        />
    );
});

export default LabeledActionButton;