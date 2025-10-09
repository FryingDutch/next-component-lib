import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type CheckBoxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const CheckBoxInput = forwardRef<HTMLInputElement, CheckBoxInputProps>(
    (props, ref): React.JSX.Element => {
    const {className, ...restProps} = props;
    return (
            <Input {...restProps} ref={ref} className={cn("h-4", className)} type="checkbox" />
    );
});

export default CheckBoxInput;