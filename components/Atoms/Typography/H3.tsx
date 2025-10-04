"use client"; 

import cn from '@/utils/cn';

export type H3Props = {
    content: string,
    className?: string,
}

const H3 = ({
    content,
    className,
}: H3Props) => {
    return (
        <h3 className={cn("inline-flex text-2xl semi-bold text-primary", className)}>
            {content}
        </h3>
    );
}

export default H3;