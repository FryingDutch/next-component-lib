"use client";

import React, {forwardRef} from "react";

import cn from '@/utils/cn';
import {AtomTypography} from "@/types/typography";

export type CaptionProps = React.HTMLAttributes<HTMLSpanElement> & AtomTypography;

const Caption = forwardRef<HTMLSpanElement, CaptionProps>(
    (props, ref) => {

    const {content, className, ...restProps} = props;
    return (
        <span {...restProps} ref={ref} className={cn("inline-flex text-xs font-normal", className)}>
            {content}
        </span>
    );}
)

export default Caption;