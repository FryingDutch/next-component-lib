import {ActionButtonProps} from "@/components/Atoms/Buttons/ActionButton";
import {HeroIconActionButtonProps} from "@/components/Atoms/Buttons/HeroIconActionButton";
import {HeroIconTextButtonProps} from "@/components/Atoms/Buttons/HeroIconTextButton";
import {RedirectButtonProps} from "@/components/Atoms/Buttons/RedirectButton";
import {SubmitDataButtonProps} from "@/components/Atoms/Buttons/SubmitDataButton";
import React from "react";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    altButton?: boolean
}

export type ButtonProps = ActionButtonProps | RedirectButtonProps | SubmitDataButtonProps | HeroIconActionButtonProps | HeroIconTextButtonProps;