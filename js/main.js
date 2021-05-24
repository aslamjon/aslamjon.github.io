
new WOW().init();

// Clock
let clock = document.querySelectorAll('.clock');
let fullDate = document.querySelector('.fullDate');


function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
function getDatee() {
    let d = new Date()
    clock.forEach((val, ind) => {
        val.innerHTML = `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
        fullDate.innerHTML = `${String(d)[0] + String(d)[1] + String(d)[2]} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
    })
}

getDatee()

setInterval('getDatee()', 10000)
// =====================- Click Red Button and Close Template -=============================

let closeTemp = document.querySelectorAll('.closeTemp');
let red = document.querySelectorAll('.red');

red.forEach((value, index) => {
    value.onclick = function () {
        closeTemp[index].style.opacity = 0
        setTimeout(function(){
            closeTemp[index].style.display = 'none';
        },500)
    }
})
// ================- change image in another -======================
let another = document.querySelectorAll('.another');
another.forEach((value, index) => {
    value.innerHTML = '<img src="img/Capture2.JPG" alt="">';
})
// ===================- change img hover -===================
function hover(mainImg, mainSrc, telImg, telSrc) {
    let main = document.getElementById(mainImg);
    let tel = document.getElementById(telImg);

    main.setAttribute('src', mainSrc);
    tel.setAttribute('src', telSrc);
}
// ===================- click yellow button -===================
function clickYellow() {
    let yellow = document.querySelectorAll('.yellow');
    let ovh = document.querySelectorAll('.ovh');
    let modal_body_bg = document.querySelector('.modal-body-bg');
    let openYellowLabel = document.querySelector('#openYellowLabel');
    yellow.forEach((value, index) => {
        value.setAttribute('data-toggle', 'modal');
        value.setAttribute('data-target', '#openYellow');
        value.onclick = function() {
            modal_body_bg.innerHTML = `<img src="${ovh[index].children[1].getAttribute('src')}" alt="">`;
            
            openYellowLabel.innerHTML = ovh[index].children[2].innerText.replace('View Now', '');
        }
    });
}
clickYellow()

// ===================- click green button -===================
let leftOrRight = false;
function clickGreen() {
    let green = document.querySelectorAll('.green');
    let closeTemp = document.querySelectorAll('.closeTemp');
    let img = document.querySelectorAll('.img');
    let tools = document.querySelector('.tools');
    let dataImgs = [];
    // let leftOrRight = false;
    green.forEach((value, index) => {
        value.onclick = function() {
            // check right or left
            if (index % 2 == 0) leftOrRight = true;
            else leftOrRight = false;

            img[index].style.width = img[index].clientWidth + 'px';
            img[index].style.transition = '1s';
            img[index].style.position = 'absolute';
            img[index].style.top = 50 + 'px';
            img[index].style.left = 20 + 'vw';
            img[index].style.right = 20 + 'vw';
            // if (index % 2 == 0) img[index].style.left = 30 + 'vw';
            // else if(!leftOrRight) img[index].style.right = 30 + 'vw';
            img[index].style.zIndex = 5;
            
            setTimeout(function(){
                img[index].style.top = window.innerHeight + 'px';
                img[index].style.left = 35 + 'vw';
                img[index].style.right = 35 + 'vw';
                // if (index % 2 == 0) img[index].style.left = 40 + 'vw';
                // else if(!leftOrRight) img[index].style.right = 40 + 'vw';
                img[index].style.width = img[index].clientWidth / 4 + 'px';
                closeTemp[index].style.maxWidth = 0;

            },500);

            setTimeout(function() {
                closeTemp[index].style.opacity = 0.3;
                tools.style.transform = 'translateY(0px)';
                dataImgs.push(img[index].firstElementChild.children[1].getAttribute('src'))
                tools.innerHTML += `
                    <div class="toolsItem"> 
                        <img src="${img[index].firstElementChild.children[1].getAttribute('src')}" alt="">
                    </div>`;
            }, 700);

            setTimeout(function() {
                closeTemp[index].style.opacity = 0;
                closeTemp[index].style.display = 'none';
            }, 900);

            setTimeout(function() {
                tools.style.transform = 'translateY(50px)';
                // =========================- toolsItem click -===========================
                let toolsItem = document.querySelectorAll('.toolsItem');
                for(let valItem of toolsItem) {
                    valItem.onclick = function() {
                        let isRun = false;
                        for (let i=0; closeTemp.length > i; i++) {
                            if (valItem.firstElementChild.getAttribute('src') == closeTemp[i].firstElementChild.firstElementChild.children[1].getAttribute('src')) {
                                closeTemp[i].style.opacity = 1;
                                closeTemp[i].style.maxWidth = '50%';
                                closeTemp[i].style.display = 'block';
                                closeTemp[i].style.zIndex = 2;
                                img[i].style.width = 100 + '%';
                                setTimeout(function(){
                                    img[index].style.top = 50 + 'px';
                                    // img[index].style.left = 30 + 'vw';
                                    if(index % 2 == 0) img[index].style.left = 30 + 'vw';
                                    else img[index].style.right = 30 + 'vw';
                                },500)

                                setTimeout(function(){
                                    img[i].style.zIndex = 1;
                                    img[i].style.position = 'static';
                                },800)
                                isRun = true;
                            }
                        }
                        if (isRun) {
                            valItem.style.display = 'none';
                        }
                        
                    }
                }
            }, 1500);

            
        }
    });

    let rootTools = document.querySelector('.root-tools');
    
    rootTools.onmouseover = function() {
        tools.style.transform = 'translateY(0px)';
    }
    rootTools.onmouseout = function() {
        tools.style.transform = 'translateY(50px)';
    }
    
    
}
clickGreen()

