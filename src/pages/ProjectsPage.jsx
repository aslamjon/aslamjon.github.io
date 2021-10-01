import React from 'react'
import { ProjectsPageStyled } from './PagesStyles/ProjectsPage.style'

import maxWay from "../assets/ImagesOfProjects/maxWay.jpg";
import maxWayMogil from "../assets/ImagesOfProjects/maxway-mobil.jpg";
import meva from "../assets/ImagesOfProjects/meva.jpg";
import mevaMogil from "../assets/ImagesOfProjects/meva-mobil.jpg";
import CardOfProjects from '../components/Card/CardOfProjects';

const dataOfProjects = [
    {
        id: 1,
        name: 'MaxWay',
        url: "https://aslamjon.github.io/maxway/",
        desktopLightImg: maxWay,
        desktopDarkImg: null,
        mobilLightImg: maxWayMogil,
        mobilDarkImg: null,
    },
    {
        id: 2,
        name: 'Meva Cheva',
        url: "https://aslamjon.github.io/meva/",
        desktopLightImg: meva,
        desktopDarkImg: null,
        mobilLightImg: mevaMogil,
        mobilDarkImg: null,
    },
];
const taskbar = [];


const ProjectsPage = () => {
    const clickHanding = (id) => {
        console.log(id)
    }
    return (
        <ProjectsPageStyled>
            {dataOfProjects.map((value) => <CardOfProjects onClick={() => clickHanding(value.id) } key={value.id} {...value} />)}
        </ProjectsPageStyled>
    )
}

export default ProjectsPage;
