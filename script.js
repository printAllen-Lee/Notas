// esse script é usado para implementar o dark mode 
var on = window.document.querySelector('button#ligar')
var off = window.document.querySelector('button#desligar')
 on.addEventListener('click',clicar1)
 off.addEventListener('click',clicar2)
 
 function clicar1() {
     
     bod.style.background = '#212529'
     te.style.background = '#899095'
 }
       
 function clicar2() {
 
     bod.style.background = 'white'
     te.style.background = 'white'
     
 }

