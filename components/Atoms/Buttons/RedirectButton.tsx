import cn from '@/utils/cn';
import { useId } from 'react';
import H4 from '../Typography/H4';

export type RedirectButtonProps = {
    href: string;
    label: string;
    className?: string;
    altButton?: boolean;
}

const RedirectButton = ({
    href,
    label,
    className,
    altButton = false
}: RedirectButtonProps): React.JSX.Element => {
    const id = 'button_' + useId();
    return (
        <a  
            id={id}
            href={href} 
            className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast", (altButton == false) ? "" : "hover:text-buttont-primary bg-background border-4 border-primary hover:bg-primary transition-colors duration-300 ease-in-out button", className)}
        >
            <H4 content={label} className={cn("", (altButton == false) ? "text-buttont-primary" : "text-primary")}/>
        </a>
    );
}

export default RedirectButton;