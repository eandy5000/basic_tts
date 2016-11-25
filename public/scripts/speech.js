var div = document.querySelector(".talk")
var but = document.querySelector(".player")

//helper functions
var _spanExtractor = function(nodes) {
    var l = nodes.length
// I think I need to use nodeList and namedNodeMap methods to get what I need
    for (var i = 0; i < l; i++ ) {
        console.log(nodes[i], " ", nodes[i].attributes)
    }

    return nodes
}

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

//this function determines if a tts span is present
//it then extracts the span value || the text value of non tts
var valExtractor = function(arrOfObj) {
    var out = ""

    arrOfObj = arrOfObj.map(function(item){
        if(item.childElementCount === 0){
            return item.innerText
        } else {
            return _spanExtractor(item.childNodes)
        }
    })

    return arrOfObj
}


var init = function(obj) {
    if(obj.childCheck) {
        
        var els = childObjToArr(obj.childObj)
        els = valExtractor(els)


    } else {
        return;
    }
    return console.log(els)
}

init(talkInfo)
