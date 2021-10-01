import React from 'react'
import { CardOfProductsStyled } from './CardOfProductsStyle'

const CardOfProjects = ({ name, url, desktopLightImg, desktopDarkImg, mobilLightImg, mobilDarkImg }) => {
    return (
        <CardOfProductsStyled>
            {name}
        </CardOfProductsStyled>
    )
}

export default CardOfProjects
