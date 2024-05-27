import React from "react";

export function Plane() {
    return (
        <svg
            width='100px' height='100px'
        >
            <line
                x1='80' y1='20' x2='20' y2='80'
                strokeWidth='15' stroke="#000"
                strokeLinecap="round"
            />
            {/* <polygon 
                points='0 10, 0 20, 50 20, 50 0'
            /> */}
            <g>
                <polygon
                    points='0 30, 50 60, 70 40, 10 20'
                />
                <polygon
                    points='70 100, 40 50, 60 30, 80 90'
                />
            </g>
            <g>
                <polygon 
                    points="0 80, 5 70, 30 70, 20 87"
                />
                <polygon 
                    points="20 100, 30 95, 30 70, 13 80"
                />
            </g>
        </svg>
    )
}