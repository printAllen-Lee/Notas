// esse script é usado para inplementar o dark mode 
hora = window.document.querySelector('div#hours')
var on = window.document.querySelector('button#ligar')
var off = window.document.querySelector('button#desligar')
 on.addEventListener('click',clicar1)
 off.addEventListener('click',clicar2)
 
 function clicar1() {
     hora.style.color = 'red'
     bod.style.background = '#212529'
     te.style.background = '#899095'
 }
       
 function clicar2() {
     hora.style.color = 'black'
     bod.style.background = 'white'
     te.style.background = 'white'
     
}
function hours () {
    var hours = document.getElementById ('hours')
 
    var date1 = new Date ()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

        if (gthours < 10) {
            gthours = `0${gthours}`
        }
        if (gtminutes < 10) {
            gtminutes = `0${gtminutes}`
        }

        if (gtseconds < 10) {
            gtseconds =`0${gtseconds}`
        }
                
    hours.textContent = `${gthours}:${gtminutes}:${gtseconds}`
}

var tictac = setInterval (hours, 1000)
hours()