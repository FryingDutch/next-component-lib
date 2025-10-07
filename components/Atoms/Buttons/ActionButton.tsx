"use client"; 

import cn from '@/utils/cn';
import React, {forwardRef} from 'react';
import {BaseButtonProps} from "@/types/buttons";
import ButtonLargeText from "@/components/Atoms/Typography/ButtonLargeText";

export type ActionButtonProps = BaseButtonProps & {
    label: string,
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>((props, ref): React.JSX.Element => {
    const {label, className, altButton = false, ...restProps} = props;
    return (
        <button
            {...restProps}
            ref={ref}
            className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer text-buttont-primary hover:bg-primary-contrast", !altButton ? "" : "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button", className)}
        >
            <ButtonLargeText
            content={label}
            className={"text-inherit bg-inherit"}
            />
        </button>
    );}
);

export default ActionButton;