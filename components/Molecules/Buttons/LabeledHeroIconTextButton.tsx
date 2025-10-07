import cn from "@/utils/cn"
import React from "react";
import { HeroIcon } from "@/types/icons";

import LabeledButtons from "./LabeledButtons";
import HeroIconTextButton from "@/components/Atoms/Buttons/HeroIconTextButton";

export type LabeledHeroIconTextButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void;
    buttonLabel: string;
    label: string;
    icon: HeroIcon;
    className?: string;
    heroIconClassName?: string;
    altButton?: boolean;
}

const LabeledHeroIconTextButton = (({onClick, icon, label, className, buttonLabel, heroIconClassName, altButton = false}: LabeledHeroIconTextButtonProps) => {
        return (
            <LabeledButtons label={label} className={cn("", className)}>
                <HeroIconTextButton onClick={onClick} icon={icon} label={buttonLabel} altButton={altButton} heroIconClassName={heroIconClassName} />
            </LabeledButtons>
        );
    });

export default LabeledHeroIconTextButton;