import LabeledButton from "./LabeledButtons";
import ActionButton, {ActionButtonProps} from "@/components/Atoms/Buttons/ActionButton";
import React from "react";

export type LabeledActionButtonProps = {
  label: string;
  className?: string;
  labelClassName?: string;
  buttonProps: ActionButtonProps;
}

const LabeledActionButton = (({label, className, labelClassName, buttonProps}: LabeledActionButtonProps): React.JSX.Element => {
    return (
        <LabeledButton
            ButtonComponent={ActionButton as React.ComponentType<ActionButtonProps>}
            buttonProps={buttonProps}
            className={className}
            labelClassName={labelClassName}
            label={label}
        />
    );
});

export default LabeledActionButton;