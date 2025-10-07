"use client";

import cn from '@/utils/cn';
import {HeadingProps} from "@/types/typography";
import React, {forwardRef} from "react";

const H3 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <h3 {...restProps} ref={ref} className={cn("inline-flex text-3xl semi-bold text-primary", className)}>
            {content}
        </h3>
    );}
);

export default H3;