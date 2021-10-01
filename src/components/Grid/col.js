import React from 'react'
import styled, { css } from 'styled-components'

const ColStyled = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    ${({sm, md, lg}) => {
        const col = (col) => {
            return css`
                ${() => col === 0 && css`
                    flex-basis: 0;
                    flex-grid: 1;
                    max-width: 100%;
                `}
                ${() => col === 1 && css`
                    flex: 0 0 8.333333%;
                    max-width: 8.333333%;
                `}
                ${() => col === 2 && css`
                    flex: 0 0 16.666667%;
                    max-width: 16.666667%;
                `}
                ${() => col === 3 && css`
                    flex: 0 0 25%;
                    max-width: 25%;
                `}
                ${() => col === 4 && css`
                    flex: 0 0 33.333333%;
                    max-width: 33.333333%;
                `}
                ${() => col === 5 && css`
                    flex: 0 0 41.666667%;
                    max-width: 41.666667%;
                `}
                ${() => col === 6 && css`
                    flex: 0 0 50%;
                    max-width: 50%;
                `}
                ${() => col === 7 && css`
                    flex: 0 0 58.333333%;
                    max-width: 58.333333%;
                `}
                ${() => col === 8 && css`
                    flex: 0 0 66.666667%;
                    max-width: 66.666667%;
                `}
                ${() => col === 9 && css`
                    flex: 0 0 75%;
                    max-width: 75%;
                `}
                ${() => col === 10 && css`
                    flex: 0 0 83.333333%;
                    max-width: 83.333333%;
                `}
                ${() => col === 11 && css`
                    flex: 0 0 91.666667%;
                    max-width: 91.666667%;
                `}
                ${() => col === 12 && css`
                    flex: 0 0 100%;
                    max-width: 100%;
                `}
            `
        }
        return css`
            ${() => sm && css`
                @media (min-width: ${() => sm ? '576' : ''}px) {
                ${col(sm)}
                }
            `}
            ${() => md && css`
                @media (min-width: ${() => md ? '768' : ''}px) {
                ${col(md)}
                }
            `}
            ${() => lg && css`
                @media (min-width: ${() => lg ? '992' : ''}px) {
                ${col(lg)}
                }
            `}
        `;
    }}
    ${({mt}) => mt && css`
        margin-top: ${mt}px;
    `}
    ${({mb}) => mb && css`
        margin-bottom: ${mb}px;
    `}
    ${({ml}) => ml && css`
        margin-left: ${ml}px;
    `}
    ${({mr}) => mr && css`
        margin-right: ${mr}px;
    `}
`;

const Col = (props) => {
    return (
        <ColStyled {...props} />
    )
}

export default Col;
