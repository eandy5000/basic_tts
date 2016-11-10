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
//this extracts JUST the element nodes from the 
//childArray object which isn't actually an array
var nodeChecker = function(obj) {
    for (var key in obj) {
      var check = parseInt(key) 
          check = isNaN(check)
        if(!check) {
            console.log(key, obj[key])
        }  
        
    }
}


var info = talkInfo()
//the childArray is actually an array-like object
console.log(nodeChecker(info.childArray))