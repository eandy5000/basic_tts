var div = document.querySelector(".talk")
var but = document.querySelector("player")


//info our reader will need from .talk
var talkInfo = function() {
   var out = {}
//see if .talk has children
   out.childCheck = (div.children.length >= 1) ? true: false
   out.childNumber = div.children.length
   out.childArray = div.children
   return out

}

var nodeChecker = function(obj) {
    for (var key in obj) {
        console.log(key, obj[key])
    }
}


var info = talkInfo()

console.log(nodeChecker(info.childArray))