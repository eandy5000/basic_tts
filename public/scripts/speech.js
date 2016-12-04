'use strict'

var els = document.querySelector(".talker")
var play = document.querySelector("#play")
var pause = document.querySelector("#pause")


var speechStringer = function(el) {
    var out = ""
    el = el.childNodes

    for (var i = 0; i < el.length; i++){
        if (el.item(i).nodeName === "#text") {
            out += el.item(i).data
        } else if (el.item(i).nodeName === "SPAN" && el.item(i).dataset.do !== undefined) {
            out += el.item(i).dataset.do
        }  
    }
    return out
}

var messageMaker = function(message) {
    message = new SpeechSynthesisUtterance(message)
    return message
}


var init = function(element) {

    //event handelers
    play.addEventListener('click', function(){

        if (window.speechSynthesis.pending === false && play.innerText === "play"){
            var message = speechStringer(els)
            window.speechSynthesis.speak(messageMaker(message))
            play.innerText = "cancel"
        } else {
            window.speechSynthesis.cancel()
            play.innerText = "play"
        }
    })

    pause.addEventListener('click', function(){
        if(window.speechSynthesis.speaking === true && pause.innerText === "pause") {
            pause.innerText = "resume"
            window.speechSynthesis.pause()
        } else if (window.speechSynthesis.paused === true && pause.innerText === "resume"){
            pause.innerText = "pause"
            window.speechSynthesis.resume()
        }
    })



}(els)