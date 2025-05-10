import React from "react";
import { Link } from "react-router-dom";

type TSwitchLinkProps = {
    wrapperClassName?: string;
    textClassName?: string;
    linkClassName?: string;
    text?:string;
    address:string;
    addressText:string;
};

function SwitchLink({
    wrapperClassName,
    textClassName,
    linkClassName,
    address,
    text,
    addressText,
} : TSwitchLinkProps) {
    return (
        <div className={wrapperClassName}>
            <span className={textClassName}>
                {text}
                <Link to={address}>
                    <span className={linkClassName}>{addressText}</span>
                </Link>
            </span>
        </div>
    );
}

export default SwitchLink;
