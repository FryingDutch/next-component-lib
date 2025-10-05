"use client"; 

import cn from '@/utils/cn';
import { HeroIcon } from '@/types/icons';

export type HeroIconActionButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    icon: HeroIcon,
    className?: string,
    heroIconClassName?: string,
    altButton?: boolean
}

const HeroIconActionButton = ({
    onClick,
    icon: HeroIcon,
    className,
    heroIconClassName,
    altButton = false
}: HeroIconActionButtonProps): React.JSX.Element => {
    return (
        <button onClick={onClick} className={cn("inline-flex items-center justify-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast", (altButton == false) ? "" : "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button", className)}>
            <HeroIcon className={cn("h-16 w-16", heroIconClassName)}/>
        </button>
    );
}

export default HeroIconActionButton;