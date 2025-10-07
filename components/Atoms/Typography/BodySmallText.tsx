"use client";

import React, {forwardRef} from "react";

import cn from '@/utils/cn';
import {BodyTextProps} from "@/types/typography";


const BodySmallText = forwardRef<HTMLDivElement, BodyTextProps>(
    (props, ref) => {
        const {content, className, ...restProps} = props;
    return (
        <div {...restProps} ref={ref} className={cn("inline-flex text-sm font-normal", className)}>
            {content}
        </div>
    );
}
)

export default BodySmallText;