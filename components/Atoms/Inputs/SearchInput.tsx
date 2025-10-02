import cn from "@/utils/cn"
import { forwardRef } from "react";
import Input from "@/components/Atoms/Inputs/Input";

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({className, ...props}, ref) => {
    return (
        <Input ref={ref} type="search"className={cn("", className)} {...props} />
    );
});

export default SearchInput;