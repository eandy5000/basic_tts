var div = document.querySelector(".talk")
var but = document.querySelector(".player")

//testing DOM api 

//children
console.log(div.children.length)
console.log(div.children)

//HTMLcollection.item()
for(var i = 0; i < div.children.length; i++) {
    console.log(div.children.item(i))
}

//testing
console.log(div.children.item(1).childNodes)

//gets div children child nodes
var deepPull = function (item) {
    var nodes = item.childNodes
    console.log("div child nodes ",nodes, " keys ", nodes.keys())
}

//seperates multiple div children
var puller = function(item) {

    var children = item.children

    for (var i = 0; i < children.length; i++) {
        console.log((i + 1), "\tdiv children ", children.item(i))
        deepPull(children.item(i))
    }


}

puller(div)