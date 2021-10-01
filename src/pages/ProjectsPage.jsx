import React from 'react'
import { ProjectsPageStyled } from './PagesStyles/ProjectsPage.style'
import { Row, Col } from './../components/Grid';
import CardOfProjects from '../components/Card/CardOfProjects';

import maxWay from "../assets/ImagesOfProjects/maxWay.jpg";
import maxWayMogil from "../assets/ImagesOfProjects/maxway-mobil.jpg";
import meva from "../assets/ImagesOfProjects/meva.jpg";
import mevaMogil from "../assets/ImagesOfProjects/meva-mobil.jpg";
import codebox from "../assets/ImagesOfProjects/codeBox2.jpg";
import codeBoxMobil from "../assets/ImagesOfProjects/codebox-mobil.jpg";
import beeline from "../assets/ImagesOfProjects/beeline2.jpg";
import beelineMobil from "../assets/ImagesOfProjects/beeline-mobil.jpg";
import calcL from "../assets/ImagesOfProjects/calcL.jpg";
import calcLMobil from "../assets/ImagesOfProjects/calcL-mobil.jpg";
import calcD from "../assets/ImagesOfProjects/calcD.jpg";
import calcDMobil from "../assets/ImagesOfProjects/calcD-mobil.jpg";
import clickUp from "../assets/ImagesOfProjects/clickUp.jpg";
import clickUpMobil from "../assets/ImagesOfProjects/clickUp-mobil.jpg";
import domD from "../assets/ImagesOfProjects/domd.JPG";
import domDMobil from "../assets/ImagesOfProjects/domd-mobil.jpg";

import megaFootMobil from "../assets/ImagesOfProjects/megafood-mobil.jpg";
import euroPrint from "../assets/ImagesOfProjects/euroPrint.jpg";

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
  {
    id: 3,
    name: 'Code Box',
    url: "https://aslamjon.github.io/codebox/",
    desktopLightImg: codebox,
    desktopDarkImg: null,
    mobilLightImg: codeBoxMobil,
    mobilDarkImg: null,
  },
  {
    id: 4,
    name: 'Mobil Operator',
    url: "https://aslamjon.github.io/mobilOperator/",
    desktopLightImg: beeline,
    desktopDarkImg: null,
    mobilLightImg: beelineMobil,
    mobilDarkImg: null,
  },
  {
    id: 5,
    name: 'Calculator',
    url: "https://aslamjon.github.io/calculator/",
    desktopLightImg: calcL,
    desktopDarkImg: calcD,
    mobilLightImg: calcLMobil,
    mobilDarkImg: calcDMobil,
  },
  {
    id: 6,
    name: 'Click Up',
    url: "https://aslamjon.github.io/clickUp/",
    desktopLightImg: clickUp,
    desktopDarkImg: null,
    mobilLightImg: clickUpMobil,
    mobilDarkImg: null,
  },
  {
    id: 7,
    name: 'DomD',
    url: "https://aslamjon.github.io/domd/",
    desktopLightImg: domD,
    desktopDarkImg: null,
    mobilLightImg: domDMobil,
    mobilDarkImg: null,
  },
];
const taskbar = [];
const recycleBin = []; 

const ProjectsPage = () => {
  const closeHandling = (index) => {
    const bin = dataOfProjects.splice(index, 1)
    recycleBin.push({
      index,
      data: bin[0]
    })
    console.log(dataOfProjects)
  }
  const maximizeHandling = (index) => {

  }
  const minimizeHandling = (index) => {

  }
  return (
    <ProjectsPageStyled>
      <Row row>
        {dataOfProjects.map((value, index) => <Col key={index+1} md={6} sm={12} mt={25} >
          <CardOfProjects 
            close={() => closeHandling(index)}
            maximize={() => maximizeHandling(index)}
            minimize={() => minimizeHandling(index)}
            {...value} />
        </Col>)}
      </Row>
    </ProjectsPageStyled>
  )
}

export default ProjectsPage;
