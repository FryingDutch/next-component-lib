import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIcon } from "@/types/icons";

export type LabeledHeroIconActionButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: HeroIcon;
  className?: string;
}

const LabeledHeroIconActionButton = forwardRef<HTMLInputElement, LabeledHeroIconActionButtonProps>(
    ({label, className, ...props}, ref) => {
    return (
        <LabeledButton button={HeroIconActionButton} {...props} label={label} />
    );
});

export default LabeledHeroIconActionButton;