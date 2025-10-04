"use client"; 

import cn from '@/utils/cn';

export type H6Props = {
    content: string,
    className?: string,
}

const H6 = ({
    content,
    className,
}: H6Props) => {
    return (
        <h5 className={cn("inline-flex text-md font-medium", className)}>
            {content}
        </h5>
    );
}

export default H6;