'use strict'

var div = document.querySelector(".talk")
var but = document.querySelector(".player")


//looks for elements with talk class 
var talkCheck = function(talkEl){
    console.log(`talk check ${talkEl} length ${talkEl.length}`)
    return (talkEl.length > 0) ? true: false
}




//runs the program functions
var init = function() {
    console.log("working")
    console.log(talkCheck(div))
}()