import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type DateInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref): React.JSX.Element => {
    const {className, ...restProps} = props;
    return (
            <Input {...restProps} ref={ref} type="date" className={cn("cursor-pointer", className)} />
    );
});

export default DateInput;