AOS.init();
// Clock
let clock = document.querySelector('.clock');

let d = new Date()
if (String(d.getMinutes()).length == 1) 
    clock.innerHTML = `${d.getHours()}:${'0'+d.getMinutes()}`;
else 
    clock.innerHTML = `${d.getHours()}:${d.getMinutes()}`;


setInterval(function() {
    let d = new Date();
    if (String(d.getMinutes()).length == 1) 
        clock.innerHTML = `${d.getHours()}:${'0'+d.getMinutes()}`;
    else 
        clock.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
},10000)
// ==================================================

let closeTemp = document.querySelectorAll('.closeTemp');
let red = document.querySelectorAll('.red');

red.forEach((value, index) => {
    value.onclick = function () {
        closeTemp[index].style.opacity = 0
        setTimeout(function(){
            closeTemp[index].style.display = 'none';
            console.log('none');
        },500)
    }
})