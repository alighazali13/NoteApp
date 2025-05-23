import type { ComponentProps, ReactNode } from "react";

type TWrapperProps = ComponentProps<"div"> & {
    onlyMyClassNames?: boolean;
    className?: string;
};

type TButtonProps = ComponentProps<"button"> & {
    text?: string;
    onlyMyClassNames?: boolean;
    className?: string;
    wrapperProps?: TWrapperProps;
    icon?: ReactNode;
    wrapper: boolean;
};

function Button({
    text,
    onlyMyClassNames,
    className,
    wrapperProps,
    wrapper,
    icon,
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

    if (wrapper === false) {
        return (
            <>
                <button className={mergedClassName} {...props}>
                    {text}
                    {icon}
                </button>
            </>
        );
    } else if (wrapper === true) {
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
                        {icon}
                    </button>
                </div>
            </>
        );
    }
}

export default Button;
