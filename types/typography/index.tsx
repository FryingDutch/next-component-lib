import React from "react";

export type AtomTypography = {
    content: string,
    className?: string,
}

export type BodyTextProps = React.HTMLAttributes<HTMLDivElement> & AtomTypography;
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & AtomTypography;