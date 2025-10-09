"use client"; 

import cn from '@/utils/cn';
import React, {forwardRef} from 'react';
import {BaseButtonProps} from "@/types/buttons";
import ButtonLargeText from "@/components/Atoms/Typography/ButtonLargeText";

export type ActionButtonProps = BaseButtonProps & {
    label: string,
}

const BASE_BUTTON_CLASSES = "bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast";
const ALT_BUTTON_CLASSES = "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button";

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
    (props, ref): React.JSX.Element => {
    const {label, className, altButton = false, ...restProps} = props;
    return (
        <button
            {...restProps}
            ref={ref}
            className={cn(
                BASE_BUTTON_CLASSES,
                altButton && ALT_BUTTON_CLASSES,
                className
            )}
        >
            <ButtonLargeText
            content={label}
            className={"text-inherit bg-inherit"}
            />
        </button>
    );}
);

export default ActionButton;