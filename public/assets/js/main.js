let clock=document.querySelectorAll(".clock"),fullDate=document.querySelector(".fullDate");function addZero(e){return e<10&&(e="0"+e),e}function getDatee(){let e=new Date;clock.forEach(((t,n)=>{t.innerHTML=`${addZero(e.getHours())}:${addZero(e.getMinutes())}`,fullDate.innerHTML=`${String(e)[0]+String(e)[1]+String(e)[2]} ${addZero(e.getHours())}:${addZero(e.getMinutes())}`}))}getDatee(),setInterval("getDatee()",1e4);let closeTemp=document.querySelectorAll(".closeTemp"),red=document.querySelectorAll(".red");red.forEach(((e,t)=>{e.onclick=function(){closeTemp[t].style.opacity=0,setTimeout((function(){closeTemp[t].style.display="none"}),500)}}));let another=document.querySelectorAll(".another");function hover(e,t,n,l){let o=document.getElementById(e),r=document.getElementById(n);o.setAttribute("src",t),r.setAttribute("src",l)}function clickYellow(){let e=document.querySelectorAll(".yellow"),t=document.querySelectorAll(".ovh"),n=document.querySelector(".modal-body-bg"),l=document.querySelector("#openYellowLabel");e.forEach(((e,o)=>{e.setAttribute("data-toggle","modal"),e.setAttribute("data-target","#openYellow"),e.onclick=function(){n.innerHTML=`<img src="${t[o].children[1].getAttribute("src")}" alt="">`,l.innerHTML=t[o].children[2].innerText.replace("View Now","")}}))}function clickGreen(){let e=document.querySelectorAll(".green"),t=document.querySelectorAll(".closeTemp"),n=document.querySelectorAll(".img"),l=document.querySelector(".tools");e.forEach(((e,o)=>{e.onmousemove=function(r){e.onclick=function(){n[o].style.width=n[o].clientWidth+"px",n[o].style.transition="0.5s cubic-bezier(.52,.53,.55,.56)",window.innerWidth/2<r.clientX?n[o].style.transform=`translate(-${window.innerWidth/2-n[o].clientWidth/2}px, 30px)`:n[o].style.transform=`translate(${window.innerWidth/2-n[o].clientWidth/2}px, 30px)`,n[o].style.zIndex=5,setTimeout((function(){n[o].style.width=n[o].clientWidth/4+"px",t[o].style.maxWidth=0}),500),setTimeout((function(){window.innerWidth/2<r.clientX?n[o].style.transform=`translate(-${window.innerWidth/4}px, ${window.innerHeight}px)`:n[o].style.transform=`translate(${window.innerWidth/2-n[o].clientWidth/2}px, ${window.innerHeight}px)`,t[o].style.opacity=.3,l.style.transform="translateY(0px)",l.innerHTML+=`\n                            <div class="toolsItem"> \n                                <img src="${n[o].firstElementChild.children[1].getAttribute("src")}" alt="">\n                            </div>`}),700),setTimeout((function(){t[o].style.opacity=0,t[o].style.display="none"}),900),setTimeout((function(){window.innerWidth<576?l.style.transform="translateY(0px)":l.style.transform="translateY(50px)";let e=document.querySelectorAll(".toolsItem");for(let r of e)r.onclick=function(){let i=!1;for(let e=0;t.length>e;e++)r.firstElementChild.getAttribute("src")==t[e].firstElementChild.firstElementChild.children[1].getAttribute("src")&&(t[e].style.opacity=1,window.innerWidth<576?t[e].style.maxWidth="100%":t[e].style.maxWidth="50%",t[e].style.display="block",t[e].style.zIndex=2,n[e].style.width="100%",setTimeout((function(){n[o].style.transform="translate(0px, 0px)"}),500),setTimeout((function(){n[e].style.zIndex=1}),800),i=!0);i&&setTimeout((function(){r.style.opacity=0,r.style.display="none"}),500);for(let t of e)""==t.style.display&&window.innerWidth<576?l.style.transform="translateY(0px)":l.style.transform="translateY(50px)"}}),1e3)}};let r=document.querySelector(".root-tools");window.innerWidth>576&&(r.onmouseover=function(){l.style.transform="translateY(0px)"},r.onmouseout=function(){l.style.transform="translateY(50px)"})}))}another.forEach(((e,t)=>{e.innerHTML='<img src="public/assets/img/Capture2.JPG" alt="">'})),clickYellow(),clickGreen();