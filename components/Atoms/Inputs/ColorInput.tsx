import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type ColorInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>((props, ref): React.JSX.Element => {
    const {className, ...restProps} = props;
    return (
            <Input type="color" {...restProps} ref={ref} className={cn("cursor-pointer border-none bg-transparent")} />
    );
});

export default ColorInput;