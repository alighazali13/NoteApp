import { type ComponentProps, type ReactNode } from "react";

type TFormProps = ComponentProps<"form"> & {
    children: ReactNode;
    onlyMyClassNames?: boolean;
    className?: string;
};

function Form({ children, onlyMyClassNames, className, ...props }: TFormProps) {
    const defaulClassNames =
        "w-full h-[18rem] flex flex-col justify-center items-center gap-5 pb-5 border-b border-[#8a8985] relative";

    const mergedClassName = onlyMyClassNames
        ? className ?? defaulClassNames
        : `${defaulClassNames} ${className ?? ""}`;

    return (
        <form className={mergedClassName} {...props}>
            {children}
        </form>
    );
}

export default Form;
