'use strict'

var els = document.querySelector(".talker")
var play = document.querySelector("#play")


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

console.log(speechStringer(els))


var init = function(element) {
    var speechText = speechStringer(element)
    var message = messageMaker(speechText)

}(els)