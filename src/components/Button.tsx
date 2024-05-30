import React from "react";
import styled from "styled-components";

import './Button.scss';


// 
// Map with styles for buttons by color as key.
// 
const buttonStyles = new Map([
    ['default', { backgroundColor: '#fff', textColor: '#000' }],
    ['primary', { backgroundColor: '#fa742d', textColor: '#fff' }],
    ['secondary', { backgroundColor: '#5a5a5a3a', textColor: '#0c131d' }]
]);

//
// Styled component of button.
//
const ButtonContainer = styled.button<{
    backgroundColor?: string,
    textColor?: string
}>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};

    --hover-color: mix(${props => props.backgroundColor}, #000, 90%);

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
        background-color: --hover-color;
    }

    &:active {
        background-color: $hover-color;
        filter: brightness(0.8);
    }

    &:focus {
        background-color: $hover-color;
        filter: brightness(0.8);

        outline: 1px solid $hover-color;
        outline-offset: 5px;
    }
`
//
// Enumeration of possible colors for button.
//
enum Color {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary'
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: string
}

export function Button({ color, ...otherProps }: ButtonProps) {
    const children = typeof otherProps.children === 'string'
        ? (<div className="crop-text">{otherProps.children}</div>)
        : otherProps.children;


    if (color === Color.secondary) {
        return (
            <ButtonContainer
                {...otherProps}
                {...buttonStyles.get(Color.secondary)}
            >
                {children}
            </ButtonContainer>
        )
    }

    if (color === Color.primary) {
        return (
            <ButtonContainer
                {...otherProps}
                {...buttonStyles.get(Color.primary)}
            >
                {children}
            </ButtonContainer>
        )
    }

    return (
        <ButtonContainer
            {...otherProps}
            {...buttonStyles.get(Color.default)}
        >
            {children}
        </ButtonContainer>
    )
}