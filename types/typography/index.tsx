import React from "react";
import {CaptionProps} from "@/components/Atoms/Typography/Caption";
import {LabelProps} from "@/components/Atoms/Typography/Label";
import {OverlineProps} from "@/components/Atoms/Typography/Overline";

export type AtomTypography = {
    content: string,
    className?: string,
}

export type BodyTextProps = React.HTMLAttributes<HTMLDivElement> & AtomTypography;
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & AtomTypography;

export type HtmlAtomTypography = BodyTextProps & HeadingProps & CaptionProps & LabelProps & OverlineProps;