var div = document.querySelector(".talk")
var but = document.querySelector("player")


//info our reader will need from .talk
var talkInfo = {
//gets talk info
   childCheck: (div.children.length >= 1) ? true: false,
   childNumber: div.children.length,
   childObj: div.children
}
//this extracts JUST the element nodes from the 
//childObj and turns them into a useful array
var childObjToArr = function(obj) {
    var out = []
    for (var key in obj) {
      var check = parseInt(key) 
          check = isNaN(check)
        if(!check) {
            out.push(obj[key])
        }  
    }
    return out
}


var init = function(obj) {
    if(obj.childCheck) {
        
        var els = childObjToArr(obj.childObj)
            els = els.reduce(function(out, item){
                item.classList.contains("speak")
            }, "")
    } else {
        return;
    }
    return console.log(els)
}

init(talkInfo)
console.log(childObjToArr(obj.childObj))