
import React from "react";
import ActionButton, {ActionButtonProps} from "@/components/Atoms/Buttons/ActionButton";
import HeroIconActionButton, {HeroIconActionButtonProps} from "@/components/Atoms/Buttons/HeroIconActionButton";
import HeroIconTextButton, {HeroIconTextButtonProps} from "@/components/Atoms/Buttons/HeroIconTextButton";
import RedirectButton, {RedirectButtonProps} from "@/components/Atoms/Buttons/RedirectButton";
import SubmitDataButton, {SubmitDataButtonProps} from "@/components/Atoms/Buttons/SubmitDataButton";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    altButton?: boolean
}

export type AllowedButtons =
    | React.ComponentType<ActionButtonProps>
    | React.ComponentType<HeroIconActionButtonProps>
    | React.ComponentType<HeroIconTextButtonProps>
    | React.ComponentType<RedirectButtonProps>
    | React.ComponentType<SubmitDataButtonProps>;