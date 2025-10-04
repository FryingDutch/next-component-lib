"use client"; 

import cn from '@/utils/cn';

export type BodySmallTextProps = {
    content: string,
    className?: string,
}

const BodySmallText = ({
    content,
    className,
}: BodySmallTextProps) => {
    return (
        <div className={cn("inline-flex text-sm font-normal", className)}>
            {content}
        </div>
    );
}

export default BodySmallText;