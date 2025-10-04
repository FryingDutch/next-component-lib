"use client"; 

import cn from '@/utils/cn';

export type CaptionProps = {
    content: string,
    className?: string,
}

const Caption = ({
    content,
    className,
}: CaptionProps) => {
    return (
        <span className={cn("inline-flex text-xs font-normal", className)}>
            {content}
        </span>
    );
}

export default Caption;