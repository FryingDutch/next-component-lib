"use client";

import cn from '@/utils/cn';
import {HeadingProps} from "@/types/typography";
import React, {forwardRef} from "react";

const H6 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <h6 {...restProps} ref={ref} className={cn("inline-flex text-3xl semi-bold text-primary", className)}>
            {content}
        </h6>
    );}
);

export default H6;