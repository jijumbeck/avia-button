import React from "react";

export function Plane({ color }: { color?: string }) {
    const planeColor = color && color.match(/#[0-9a-f]{3,8}/) ? color : '#000';

    return (
        <svg
            width='100px' height='100px'
        >
            <line
                x1='80' y1='20' x2='20' y2='80'
                strokeWidth='15' stroke={planeColor}
                strokeLinecap="round"
            />
            <g>
                <polygon
                    points='0 30, 50 60, 70 40, 10 20'
                    stroke={planeColor}
                    fill={planeColor}
                />
                <polygon
                    points='70 100, 40 50, 60 30, 80 90'
                    stroke={planeColor}
                    fill={planeColor}
                />
            </g>
            <g>
                <polygon
                    points="0 80, 5 70, 30 70, 20 87"
                    stroke={planeColor}
                    fill={planeColor}
                />
                <polygon
                    points="20 100, 30 95, 30 70, 13 80"
                    stroke={planeColor}
                    fill={planeColor}
                />
            </g>
        </svg>
    )
}