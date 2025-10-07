"use client"; 

import cn from '@/utils/cn';
import {AtomTypography} from "@/types/typography";
import React, {forwardRef} from "react";

export type LabelProps = React.HTMLAttributes<HTMLLabelElement> & AtomTypography;

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <label {...restProps} ref={ref} className={cn("inline-flex text-sm font-medium", className)}>
            {content}
        </label>
    );}
)
export default Label;