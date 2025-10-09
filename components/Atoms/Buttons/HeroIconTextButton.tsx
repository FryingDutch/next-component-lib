"use client";

import React, {forwardRef} from "react";
import cn from '@/utils/cn';
import HeroIconActionButton, {HeroIconActionButtonProps} from '@/components/Atoms/Buttons/HeroIconActionButton';
import ButtonLargeText from "@/components/Atoms/Typography/ButtonLargeText";
import {AtomTypography} from "@/types/typography";

export type HeroIconTextButtonProps = HeroIconActionButtonProps & AtomTypography & {
    label: string
};

const BASE_BUTTON_CLASSES = "bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast";
const ALT_BUTTON_CLASSES = "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button";

const HeroIconTextButton = forwardRef<HTMLButtonElement, HeroIconTextButtonProps>((props, ref): React.JSX.Element => {
    const {onClick, icon: HeroIcon, className, heroIconClassName, altButton = false, label, ...restProps} = props;
    return (
        <HeroIconActionButton
                {...restProps}
                ref={ref}
                className={cn(BASE_BUTTON_CLASSES, altButton && ALT_BUTTON_CLASSES, className)}
                onClick={onClick}
                icon={HeroIcon}
                heroIconClassName={cn("", heroIconClassName)}
                altButton={altButton}
            >
            <ButtonLargeText
                content={label}
                className={cn("absolute h-full w-full justify-center items-center text-inherit")}
            />
        </HeroIconActionButton>
    ) as React.JSX.Element;
});

export default HeroIconTextButton;