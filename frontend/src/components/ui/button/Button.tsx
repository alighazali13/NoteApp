import type { ComponentProps } from "react";

type TWrapperProps = ComponentProps<"div"> & {
    onlyMyClassNames?: boolean;
    className?: string;
};

type TButtonProps = ComponentProps<"button"> & {
    text: string;
    onlyMyClassNames?: boolean;
    className?: string;
    wrapperProps?: TWrapperProps;
};

function Button({
    text,
    onlyMyClassNames,
    className,
    wrapperProps,
    ...props
}: TButtonProps) {
    const defaultClassNames = "";

    const mergedClassName = onlyMyClassNames
        ? className ?? defaultClassNames
        : `${defaultClassNames} ${className ?? ""}`;

    const defaultWrapperClassName =
        "flex h-[3rem] w-full rounded-3xl items-center justify-center mt-6 bg-[#698b6a] text-white";
    const {
        onlyMyClassNames: wrapperOnlyMyClassNames,
        className: wrapperClassName,
    } = wrapperProps ?? {};

    const mergedWrapperClassName = wrapperOnlyMyClassNames
        ? wrapperClassName ?? defaultWrapperClassName
        : `${defaultWrapperClassName} ${wrapperClassName ?? ""}`;

    return (
        <>
            <div
                className={mergedWrapperClassName}
                {...(wrapperProps && {
                    ...wrapperProps,
                    className: mergedWrapperClassName,
                })}
            >
                <button className={mergedClassName} {...props}>
                    {text}
                </button>
            </div>
        </>
    );
}

export default Button;
