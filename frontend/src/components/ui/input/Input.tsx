import type { ComponentProps, ReactNode } from "react";

type TWrapperProps = ComponentProps<"div"> & {
    onlyMyClassNames?: boolean;
    className?: string;
};

type TInputProps = ComponentProps<"input"> & {
    onlyMyClassNames?: boolean;
    icon?: ReactNode;
    wrapperProps?: TWrapperProps;
};

function Input({
    icon,
    onlyMyClassNames,
    className,
    wrapperProps,
    ...props
}: TInputProps) {
	
    const defaultInputClassNames = "w-full outline-none";

    const mergedInputClassName = onlyMyClassNames
        ? className ?? defaultInputClassNames
        : `${defaultInputClassNames} ${className ?? ""}`;

    const defaultWrapperClassName =
        "flex w-full h-[3rem] rounded-2xl items-center gap-4 px-2 bg-[#dce2d8] text-[#676f64]";

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
                {icon}
                <input className={mergedInputClassName} {...props} />
            </div>
        </>
    );
}

export default Input;
