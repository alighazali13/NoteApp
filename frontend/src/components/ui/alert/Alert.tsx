import React, { type ComponentProps } from "react";

type TAlertProps = ComponentProps<"div"> & {
    variant: string;
    message: string | undefined;
};

function Alert({ variant, message }: TAlertProps) {
    if (variant === "error") {
        return (
            <>
                <div className=" top-3 flex items-center justify-between w-full px-4">
                    <div className="flex items-center justify-between px-4 py-7 border border-red-600 w-full bg-red-100 text-red-600 rounded-2xl h-10">
                        <div className="flex items-center gap-2">
                            <strong>error!</strong>
                            <span>{message}</span>
                        </div>
                        <button>x</button>
                    </div>
                </div>
            </>
        );
    } else if (variant === "success") {
        return (
            <>
                <div className=" top-3 flex items-center justify-between w-full px-4">
                    <div className="flex items-center justify-between px-4 border border-green-600 w-full bg-green-100 text-green-600 rounded-2xl h-10">
                        <div className="flex gap-2">
                            <strong>success!</strong>
                            <span>{message}</span>
                        </div>
                        <button>x</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Alert;
