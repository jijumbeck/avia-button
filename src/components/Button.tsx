import React, { PropsWithChildren } from "react";
import './Button.scss';

export function AviaButton(props: PropsWithChildren) {
    return (
        <button
            className="avia-button"
        >
            {
                typeof props.children === 'string'
                ? (<div className="avia-button__text">{props.children}</div>)
                : props.children
            }
        </button>
    )
}