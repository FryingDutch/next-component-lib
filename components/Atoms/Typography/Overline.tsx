"use client"; 

import cn from '@/utils/cn';
import {AtomTypography} from "@/types/typography";
import React, {forwardRef} from "react";

export type OverlineProps = React.HTMLAttributes<HTMLSpanElement> & AtomTypography;

const Overline = forwardRef<HTMLSpanElement, OverlineProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <span {...restProps} ref={ref} className={cn("inline-flex text-xs uppercase font-medium", className)}>
            {content}
        </span>
    );}
);

export default Overline;