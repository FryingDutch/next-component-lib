"use client"; 

import cn from '@/utils/cn';
import HeroIconActionButton, { HeroIconActionButtonProps } from './HeroIconActionButton';

const AlternativeHeroIconActionButton = ({
    className,
    ...props
}: HeroIconActionButtonProps): React.JSX.Element => {
    return (
        <HeroIconActionButton 
        {...props}
        className={cn("bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background", className)}
        />
    );
}

export default AlternativeHeroIconActionButton;