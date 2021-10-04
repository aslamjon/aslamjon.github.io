import React, { useState } from 'react'
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
import Taskbar from '../components/Taskbar';


const ProjectsPage = () => {
  const [dataOfProjects, setDataOfProjects] = useState([
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
  ]);
  const [taskbar, setTaskbar] = useState([]);
  const [recycleBin, setRecycleBin] = useState([]);

  const cardToTaskbarAnimation = (e, X, setX, index) => {
    let element = e.target.parentElement.parentElement;
    let col = e.target.parentElement.parentElement.parentElement;
    let { x: xValue } = element.getBoundingClientRect();
    if (!X) {
      setX(xValue);
      setTimeout(() => col.style.display = 'none', 1000);
    } else {
      col.style.display = 'block';
      setTimeout(() => setX(''), 200);
    }
  }
  const copyCardToOtherState = (index, type="recycle") => {
    const value = dataOfProjects[index];
    let temp = [];
    if (type === "recycle") temp = [...recycleBin];
    else temp = [...taskbar];
    temp.push({
      index,
      data: value[0] ? value[0] : value
    });
    if (type === "recycle") setRecycleBin(temp);
    else setTaskbar(temp);
  }
  const closeHandling = (e, X, setX, index) => {
    cardToTaskbarAnimation(e, X, setX, index);
    if (!X) copyCardToOtherState(index);
  }
  // putBack for Taskbar
  const putBack = (e, index, loopIndex, type) => {
    let cardOfTaskbar = document.querySelector(`.cardOfTaskbar${index}`);
    let cardOfProjectsIndex = document.querySelector('.cardOfProjectsIndex' + index);
    if (type === 'recycle') cardOfProjectsIndex.click();
    else cardOfTaskbar.click();
    
    let perent = e.target.parentElement;
    setTimeout(() => perent.classList.add('active'), 200);
    // For Recycle Bin (Trash)
    if (type === 'recycle') setTimeout(() => {
      let temp = recycleBin.filter((elem, elemIndex) => elemIndex !== loopIndex);
      setRecycleBin(temp);
      perent.classList.remove('active');
    }, 250);
    // for Taksbar
    else setTimeout(() => {
      let temp = taskbar.filter((elem, elemIndex) => elemIndex !== loopIndex);
      setTaskbar(temp);
      perent.classList.remove('active');
    }, 250);
  }
  // Empty button for Taskbar
  const emptyRecycle = () => {
    setRecycleBin([]);
  }
  
  const maximizeHandling = (e) => {
    let elem = e.target.parentElement.parentElement;
    elem.classList.toggle("maximize")
    elem.parentElement.style.position = 'unset';
  }
  const minimizeHandling = (e, X, setX, index) => {
    cardToTaskbarAnimation(e, X, setX, index);
    let elem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild;
    elem.classList.toggle('active');
    setTimeout(() => !X && copyCardToOtherState(index, "minimize"), 300);
    setTimeout(() => elem.classList.toggle('active'),1000);
  }
  const taskbarContaxt = {
    recycleBin,
    taskbar,
    putBack,
    emptyRecycle,
  }
  return (
    <ProjectsPageStyled>
      <Row row>
        {dataOfProjects.map((value, index) => <Col key={index + 1} md={6} sm={12} mt={25} >
          <CardOfProjects key={index + 1}
            close={closeHandling}
            maximize={maximizeHandling}
            minimize={minimizeHandling}
            {...value} index={index} />
        </Col>)}
      </Row>
      <Taskbar {...taskbarContaxt} />
    </ProjectsPageStyled>
  )
}

export default ProjectsPage;
