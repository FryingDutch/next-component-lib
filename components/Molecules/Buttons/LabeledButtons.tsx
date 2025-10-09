import React from "react";
import Label from "@/components/Atoms/Typography/Label";
import cn from "@/utils/cn";
import {AllowedButtons} from "@/types/buttons";

export type LabeledButtonProps<T extends AllowedButtons> = {
  label: string;
  ButtonComponent: React.ComponentType<T>;
  buttonProps: React.ComponentPropsWithoutRef<T>;
  className?: string;
  labelClassName?: string;
};

const LabeledButton = <T extends AllowedButtons>({
  ButtonComponent,
  buttonProps,
  label,
  className,
  labelClassName,
}: LabeledButtonProps<T>): React.JSX.Element => {
    return (
      <div className={cn("flex flex-col", className)}>
        <Label content={label} className={cn("justify-center whitespace-nowrap mb-2", labelClassName)} />
        <ButtonComponent {...buttonProps} />
      </div>
);
};

export default LabeledButton;