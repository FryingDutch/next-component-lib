import React, { forwardRef, ComponentType, InputHTMLAttributes, RefAttributes } from "react";
import Label from "@/components/Atoms/Typography/Label";
import cn from "@/utils/cn";

export type LabeledInputProps<P extends {}> = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  input: ComponentType<P & RefAttributes<HTMLInputElement>>;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const LabeledInput = <P extends {className?: string}>(
  { input: Input, className, label, labelClassName, inputClassName, ...props }: LabeledInputProps<P>,
  ref: React.Ref<HTMLInputElement>
) => (
  <div className={cn("flex flex-row items-center", className)}>
    <Label content={label} className={cn("w-1/2 justify-end max-w-1/2 whitespace-nowrap", labelClassName)} />
    <Input ref={ref} {...(props as P)} className={cn("w-1/2 max-w-1/2 ml-2", inputClassName)} />
  </div>
);

export default forwardRef(LabeledInput) as <P extends {}>(
  props: LabeledInputProps<P> & { ref?: React.Ref<HTMLInputElement> }
) => React.JSX.Element;
