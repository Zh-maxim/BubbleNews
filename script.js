// preloader
window.onload = () => {
        let preloader = document.querySelector(".preloader")
        let bubbleLoad = document.querySelector(".bubbleLoad")
        let loadBlik = document.querySelector(".loadBlik")
        function disapear1() {
            preloader.style.transition = "0.5s"
            preloader.style.opacity = 0
            console.log(1)
        }

        function disapear2() {
            preloader.style.display = "none"
        }
        setTimeout(disapear1, 3000)
        setTimeout(disapear2, 3500)
    }
    //счетчик времени function
let time = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeTable = document.querySelector(".headSecTime");
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    timeTable.innerHTML = hours + ":" + minutes
    console.log(hours + ":" + minutes)
}
setInterval(time, 1000)
    //счетчик времени
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let timeTable = document.querySelector(".headSecTime");
if (minutes < 10) {
    minutes = "0" + minutes
}
timeTable.innerHTML = hours + ":" + minutes
    // пузырь счастья 
let controller = 0;
let bubbleBall = document.querySelector(".bubbleBall")
let blesk = document.querySelector(".blesk")
let modalWindowHead = document.querySelector(".modalWindowHead")
let modalWindow = document.querySelector(".modalWindow")
bubbleBall.onclick = () => {
        bubbleBall.classList.toggle("bubbleBall-White")
        blesk.classList.toggle("blesk-White")
        if (controller % 2 == 0) {
            console.log("Только хороошие новости")
            modalWindowHead.style.top = "0px"
            modalWindow.innerHTML = "<a style=\"width:100%; height:100%; display:flex; justify-content: center; text-align: center; align-items:center; color: #1E1E1E;font-family: 'Ubuntu', sans-serif;font-size: 20px; font-weight: 800;\">Теперь вы видите только хорошие новости!</a>"

            function happiness() {
                modalWindowHead.style.top = "-100px"
            }
            setTimeout(happiness, 2000)
            let bad = document.getElementsByClassName("bad")
            for (var i = 0; i < bad.length; i += 1) {
                bad[i].style.display = 'none';
            }
        }
        else {
            modalWindowHead.style.top = "0px"
            modalWindow.innerHTML = "<a style=\"width:100%; height:100%; display:flex; justify-content:center; align-items:center; color: #1E1E1E;font-family: 'Ubuntu', sans-serif;font-size: 20px; font-weight: 800;\">Теперь вы видите все новости!</a>"

            function happiness() {
                modalWindowHead.style.top = "-100px"
            }
            setTimeout(happiness, 2000)
            console.log("Все новости")
            let bad = document.getElementsByClassName("bad")
            for (var i = 0; i < bad.length; i += 1) {
                bad[i].style.display = 'flex';
            }
        }
        controller++;
        console.log(controller)
    }
    // main news анимашка
let textMainNew = document.querySelector(".textMainNew")
let mainNew = document.querySelector(".mainNew")
textMainNew.onmouseover = () => {
    mainNew.style.top = -60 + "%"
    mainNew.style.transition = 1 + "s"
    mainNew.style.transitionStyle = "easeInOutQuint"
}
textMainNew.onmouseout = () => {
    mainNew.style.top = -0 + "%"
    mainNew.style.transition = 1 + "s"
    mainNew.style.transitionStyle = "easeInOutQuint"
}