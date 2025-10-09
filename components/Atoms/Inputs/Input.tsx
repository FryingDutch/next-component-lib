import cn from "@/utils/cn"
import React, { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
    const {id, className, ...restProps} = props;
    return (
        <input {...restProps} id={id} ref={ref} className={cn("border-1 border-primary/30 bg-white pl-1 h-8", className)}/>
    );
});

export default Input;
