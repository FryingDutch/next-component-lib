import React from "react";
import Label from "@/components/Atoms/Typography/Label";
import cn from "@/utils/cn";
import {ButtonProps} from "@/types/buttons";

export type LabeledButtonProps = {
  label: string;
  ButtonComponent: React.ComponentType<ButtonProps>;
  buttonProps: ButtonProps;
  className?: string;
  labelClassName?: string;
};

const LabeledButton = ({
  ButtonComponent,
  buttonProps,
  label,
  className,
  labelClassName,
}: LabeledButtonProps): React.JSX.Element => (
  <div className={cn("flex flex-col", className)}>
    <Label content={label} className={cn("justify-center whitespace-nowrap mb-2", labelClassName)} />
    <ButtonComponent {...buttonProps}/>
  </div>
);

export default LabeledButton;