"use client";

import React from "react";
import cn from '@/utils/cn';
import HeroIconActionButton, {HeroIconActionButtonProps} from '@/components/Atoms/Buttons/HeroIconActionButton';
import ButtonLargeText from "@/components/Atoms/Typography/ButtonLargeText";
import {AtomTypography} from "@/types/typography";

export type HeroIconTextButtonProps = HeroIconActionButtonProps & AtomTypography;

const HeroIconTextButton = ({
    onClick,
    icon: HeroIcon,
    className,
    heroIconClassName,
    label,
    altButton = false
}: HeroIconTextButtonProps): React.JSX.Element => {
    return (
        <HeroIconActionButton
            className={cn('relative w-full h-full justify-start', (altButton === false) ? "text-buttont-primary" : "text-primary hover:text-buttont-primary", className)}
            onClick={onClick}
            icon={HeroIcon}
            heroIconClassName={cn("", heroIconClassName)}
            altButton={altButton}
            label={label}>
            <ButtonLargeText content={label}
                className={cn("absolute h-full w-full justify-center items-center text-inherit")}
            />
        </HeroIconActionButton>
    ) as React.JSX.Element;
}

export default HeroIconTextButton;