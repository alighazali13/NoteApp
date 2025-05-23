import React, { type ComponentProps } from "react";

type TWrapperProps = ComponentProps<"div"> & {
    onlyMyClassNames?: boolean;
    className?: string;
};

type TTextAreaProps = ComponentProps<"textarea"> & {
    onlyMyClassNames?: boolean;
    wrapperProps?: TWrapperProps;
    wrapper: boolean;
};

function TextArea({
    wrapper,
    onlyMyClassNames,
    className,
    wrapperProps,
    ...props
}: TTextAreaProps) {
    const defaultTextAreaClassNames = "w-full outline-none placeholder:text-[#868686] text-white resize-none";

    const mergedTextAreaClassName = onlyMyClassNames
        ? className ?? defaultTextAreaClassNames
        : `${defaultTextAreaClassNames} ${className ?? ""}`;

    return (
        <>
            <div {...wrapperProps}>
                <textarea className={mergedTextAreaClassName} {...props} />
            </div>
        </>
    );
}

export default TextArea;
