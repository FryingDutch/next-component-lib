"use client"; 

import cn from '@/utils/cn';
import { HeroIcon } from '@/types/icons';

export type HeroIconActionButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    icon: HeroIcon,
    className?: string,
    heroIconClassName?: string,
}

const HeroIconActionButton = ({
    onClick,
    icon: HeroIcon,
    className,
    heroIconClassName
}: HeroIconActionButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className={cn("inline-flex items-center justify-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap", className)}
        >
            <HeroIcon
                className={cn("h-16 w-16", heroIconClassName)}
            />
        </button>
    );
}

export default HeroIconActionButton;