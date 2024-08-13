var sec = 0
var min = 0 
var interval = 0
var hr=0

function twoDigit(digit){
    if (digit<10){
        return ("0"+digit)
    }
    else{return digit}
        
    
}

function start(){
    interval =  setInterval(watch,10)
}
function pause(){
    clearInterval(interval)
    
}
function reset(){
    clearInterval(interval)
    sec=0
    min = 0
    
    document.getElementById('watch').innerText = '00:00:00'
}
function watch(){
    sec++
    if (sec==60){
        min++
        sec =0 
        if(min == 60){
            min=0
            hr++

        }
    }
    document.getElementById('watch').innerText=  twoDigit(hr) + ':'+ twoDigit(min) +':' +twoDigit(sec)
}

