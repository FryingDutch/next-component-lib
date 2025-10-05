"use client"; 

import cn from '@/utils/cn';
import { HeroIcon } from '@/types/icons';
import { BodyLargeTextProps } from '../Typography/BodyLargeText';
import H4 from '../Typography/H4';
import HeroIconActionButton from './HeroIconActionButton';

export type HeroIconTextButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    icon: HeroIcon,
    className?: string,
    heroIconClassName?: string,
    altButton?: boolean,
    buttonLabel: string
}

const HeroIconTextButton = ({
    onClick,
    icon: HeroIcon,
    className,
    heroIconClassName,
    buttonLabel,
    altButton = false,
    ...props
}: HeroIconTextButtonProps): React.JSX.Element => {
    return (
        <div className='relative z-20'>
            <H4 content={buttonLabel} className={cn("absolute", (altButton == false) ? "text-buttont-primary" : "text-primary hover:text-buttont-primary")}/>
            <HeroIconActionButton
                className='w-full h-full'
                onClick={onClick}
                icon={HeroIcon}
                heroIconClassName={heroIconClassName}
                altButton={altButton}
                {...props}
            />
        </div>
        );
}

export default HeroIconTextButton;