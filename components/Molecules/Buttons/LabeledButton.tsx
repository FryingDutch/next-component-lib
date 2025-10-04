import { forwardRef, ComponentType, InputHTMLAttributes, RefAttributes } from "react";
import Label from "@/components/Atoms/Typography/Label";
import cn from "@/utils/cn";

export type LabeledButtonProps<P extends {}> = {
  label: string;
  button: ComponentType<P>;
  buttonLabel?: string,
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const LabeledButton = <P extends {}>(
  { button: Button, className, label, buttonLabel, labelClassName, inputClassName, ...props}: LabeledButtonProps<P>,
) => (
  <div className={cn("flex flex-col", className)}>
    <Label content={label} className={cn("justify-center whitespace-nowrap mb-2", labelClassName)} />
    <Button {...(props as P)} className={cn("", inputClassName)} label={buttonLabel}/>
  </div>
);

export default LabeledButton;
