import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    ({className, ...props}, ref) => {
    return (
            <Input ref={ref} type="file" className={cn("", className)} {...props} />
    );
});

export default FileInput;