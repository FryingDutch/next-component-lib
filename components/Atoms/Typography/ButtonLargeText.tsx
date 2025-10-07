"use client";

import React, {forwardRef} from "react";
import cn from '@/utils/cn';
import {AtomTypography} from "@/types/typography";
export type ButtonLargeTextProps = React.HTMLAttributes<HTMLSpanElement> & AtomTypography;

const ButtonLargeText = forwardRef<HTMLSpanElement, ButtonLargeTextProps>((
    props,
    ref,
): React.JSX.Element => {
    const {content, className, ...restProps} = props;
    return (
        <span {...restProps} ref={ref} className={cn("inline-flex text-lg font-semibold", className)}>
            {content}
        </span>
    );}
);

export default ButtonLargeText;