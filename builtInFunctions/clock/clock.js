
setInterval(setClock,1000)

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() /60
    const minuteRatio = (secondRatio + currentDate.getSeconds()) /60
    const hourRatio = (secondRatio + currentDate.getSeconds()) /60
}