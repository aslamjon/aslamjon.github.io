AOS.init();
// Clock
let clock = document.querySelectorAll('.clock');

let d = new Date()
clock.forEach((val, ind) => {
    if (String(d.getMinutes()).length == 1) 
        val.innerHTML = `${d.getHours()}:${'0'+d.getMinutes()}`;
    else 
        val.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
})



setInterval(function() {
    let d = new Date();
    clock.forEach((val, ind) => {
        if (String(d.getMinutes()).length == 1) 
            val.innerHTML = `${d.getHours()}:${'0'+d.getMinutes()}`;
        else 
            val.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
    })
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
// ======================================
let another = document.querySelectorAll('.another');
another.forEach((value, index) => {
    value.innerHTML = '<img src="img/Capture2.JPG" alt="">';
})