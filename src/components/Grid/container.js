import React from 'react'
import styled, { css } from 'styled-components'

const ContainerStyled = styled.div`
    padding: 0 80px;
    ${({p}) => p && css`
        padding: 0 ${p}px;
    `}
`;

const Container = (props) => {
    return (
        <ContainerStyled {...props} />
    )
}

export default Container
