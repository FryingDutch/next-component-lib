import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";
import cn from "@/utils/cn";

export type UrlInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const UrlInput = forwardRef<HTMLInputElement, UrlInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="url" className={cn("", className)} {...props} />
    );
});

export default UrlInput;