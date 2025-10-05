import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIcon } from "@/types/icons";

export type LabeledHeroIconActionButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: HeroIcon;
  className?: string;
  altButton?: boolean
}

const LabeledHeroIconActionButton = forwardRef<HTMLInputElement, LabeledHeroIconActionButtonProps>(
    ({label, className, altButton = false, ...props}, ref) => {
    return (
        <LabeledButton button={HeroIconActionButton} {...props} label={label} altButton={altButton} className={cn("", className)}/>
    );
});

export default LabeledHeroIconActionButton;