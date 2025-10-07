"use client"; 

import cn from '@/utils/cn';
import {HeadingProps} from "@/types/typography";
import React, {forwardRef} from "react";

const H2 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <h2 {...restProps} ref={ref} className={cn("inline-flex text-3xl semi-bold text-primary", className)}>
            {content}
        </h2>
    );}
);

export default H2;