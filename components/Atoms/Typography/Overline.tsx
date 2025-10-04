"use client"; 

import cn from '@/utils/cn';

export type OverlineProps = {
    content: string,
    className?: string,
}

const Overline = ({
    content,
    className,
}: OverlineProps) => {
    return (
        <span className={cn("inline-flex text-xs uppercase font-medium", className)}>
            {content}
        </span>
    );
}

export default Overline;