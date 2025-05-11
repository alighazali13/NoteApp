import { type ComponentProps } from "react";

type TNoteCardProps = ComponentProps<'div'> & {
    text: string;
    className?:string;
    onlyMyClassNames?:boolean;
}

function NoteCard({text, className, onlyMyClassNames, ...props} : TNoteCardProps) {
    const defaultClassNames = "w-full px-8 py-5 rounded-xl min-h-[5rem] flex items-center shadow-[0px_0px_6px_1px_rgba(22,22,22,1)]";

    const mergedClassName = onlyMyClassNames
        ? className ?? defaultClassNames
        : `${defaultClassNames} ${className ?? ""}`;
    return (
        <>
            <div className={mergedClassName} {...props}>
                <p>{text}</p>
            </div>
        </>
    );
}

export default NoteCard;
