"use client";

import cn from '@/utils/cn';
import { HeroIconProps } from '@/types/icons';
import React, {forwardRef} from "react";
import {BaseButtonProps} from "@/types/buttons";

export type HeroIconActionButtonProps = BaseButtonProps & {
    icon: HeroIconProps,
    heroIconClassName?: string
}

const HeroIconActionButton = forwardRef<HTMLButtonElement, HeroIconActionButtonProps>(
    (props, ref): React.JSX.Element => {
    const {onClick, icon: HeroIcon, className, heroIconClassName, altButton = false, ...restProps} = props;
    return (
        <button
                {...restProps}
                ref={ref}
                onClick={onClick}
                className={cn("inline-flex items-center justify-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast", (altButton == false) ? "" : "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button", className)}
        >
            <HeroIcon className={cn("h-16 w-16", heroIconClassName)}  />
        </button>
    );}
);

export default HeroIconActionButton;