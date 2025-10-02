import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({...props}, ref) => {
    return (
        <Input ref={ref} type="text" {...props} />
    );
});

export default TextInput;