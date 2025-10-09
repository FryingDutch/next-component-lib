import cn from "@/utils/cn"
import React from "react";
import LabeledButtons from "./LabeledButtons";
import HeroIconActionButton, {HeroIconActionButtonProps} from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIconProps } from "@/types/icons";

export type LabeledHeroIconActionButtonProps = {
  onClick: (...args: any[]) => any;
  label: string;
  icon: HeroIconProps;
  className?: string;
  altButton?: boolean;
}

const LabeledHeroIconActionButton = (({onClick, icon, label, className, altButton = false}: LabeledHeroIconActionButtonProps) => {
    return (
        <LabeledButtons
            ButtonComponent={HeroIconActionButton as React.ComponentType<HeroIconActionButtonProps>}
            buttonProps={{
                onClick: onClick,
                icon: icon,
                altButton: altButton as boolean
            }}
            label={label}
            className={cn("", className)}
        />
    );
});

export default LabeledHeroIconActionButton;