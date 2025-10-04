"use client"; 

import cn from '@/utils/cn';

export type H1Props = {
    content: string,
    className?: string,
}

const H1 = ({
    content,
    className,
}: H1Props) => {
    return (
        <h1 className={cn("inline-flex text-4xl font-bold text-primary", className)}>
            {content}
        </h1>
    );
}

export default H1;