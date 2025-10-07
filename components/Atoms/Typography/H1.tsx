"use client";
import React, {forwardRef} from "react";

import cn from '@/utils/cn';
import {HeadingProps} from "@/types/typography";

const H1 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {content, className, ...restProps} = props;
    return (
        <h1 {...restProps} ref={ref} className={cn("inline-flex text-4xl font-bold text-primary", className)}>
            {content}
        </h1>
    );
}
);

export default H1;