import cn from "@/utils/cn"
import React, { forwardRef } from "react";
import LabeledButtons from "./LabeledButtons";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIcon } from "@/types/icons";

export type LabeledHeroIconActionButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void;
  label: string;
  icon: HeroIcon;
  className?: string;
  altButton?: boolean;
}

const LabeledHeroIconActionButton = (({onClick, icon, label, className, altButton = false}: LabeledHeroIconActionButtonProps) => {
    return (
        <LabeledButtons label={label} className={cn("", className)}>
            <HeroIconActionButton onClick={onClick} icon={icon} altButton={altButton} />
        </LabeledButtons>
    );
});

export default LabeledHeroIconActionButton;