import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'

const MainLayoutStyled = styled.div`
    margin: 40px 15px 15px;
`;

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <MainLayoutStyled>
                {children}
            </MainLayoutStyled>
        </>
    )
}

export default MainLayout
