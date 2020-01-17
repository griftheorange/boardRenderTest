const body = document.querySelector("body")

const size = 900
const edge = size/15
const colors = ["red", "green", "blue", "yellow"]
const test1 = [0, 0, 0, 0, 0]
const borderColor = "black"

let whiteTiles = []
for(let i = 0; i < 52; i++){
    whiteTiles.push(i)
}


let svg = d3.select("body")
    .append("div")
    .attr("id", "canvas")
    .append("svg")
    .attr("width", size)
    .attr("height", size)
    
let backFill = svg.append("rect")
    .attr("height", "100%")
    .attr("width", "100%")
    .style("stroke", borderColor)
    .style("stroke-width", "2px")
    .style("fill", "none")

let colorBlockGen = svg.selectAll(".startAreas")
    .data(colors)
    .enter()

colorBlockGen.append("rect")
    .attr("height", 6*edge)
    .attr("width", 6*edge)
    .attr("x", function(d, i){
        if(i%2 == 0){
            return 0
        } else {
            return 9*edge
        }
    })
    .attr("y", function(d, i){
        if(i <= 1){
            return 0
        } else {
            return 9*edge
        }
    })
    .style("fill", function(d){
        return d
    })
    .attr("stroke", borderColor)
    .attr("stroke-width", "1px")

colorBlockGen.append("polygon")
    .attr("points", function(d, i){
        switch(i){
            case 0:
                return `${6*edge},${9*edge} ${6*edge},${6*edge} ${size/2-10},${size/2}`
                break;
            case 1:
                return `${6*edge},${6*edge} ${9*edge},${6*edge} ${size/2},${size/2-10}`
                break;
            case 2:
                return `${9*edge},${9*edge} ${6*edge},${9*edge} ${size/2},${size/2+10}`
                break;
            case 3:
                return `${9*edge},${6*edge} ${9*edge},${9*edge} ${size/2+10},${size/2}`
                break;
        }
    })
    .attr("fill", function(d){return d})
    .attr("stroke", borderColor)
    .attr("stroke-width", "1px")

let xs = 1*edge
let ys = 7*edge

svg.selectAll(".tiles")
    .data(test1)
    .enter()
        .append("rect")
        .attr("width", `${edge}`)
        .attr("height", `${edge}`)
        .attr("x", function(d, i){
            return i*edge + xs
        })
        .attr("y", function(d, i){
            return ys
        })
        .attr("fill", "red")
        .attr("stroke", borderColor)
        .attr("stroke-width", "1px")

////////////////////////////////

xs = 7*edge
ys = 1*edge

svg.selectAll(".tiles")
    .data(test1)
    .enter()
        .append("rect")
        .attr("width", `${edge}`)
        .attr("height", `${edge}`)
        .attr("x", function(d, i){
            return xs
        })
        .attr("y", function(d, i){
            return i*edge + ys
        })
        .attr("fill", "green")
        .attr("stroke", borderColor)
        .attr("stroke-width", "1px")

xs = 13*edge
ys = 7*edge

svg.selectAll(".tiles")
    .data(test1)
    .enter()
        .append("rect")
        .attr("width", `${edge}`)
        .attr("height", `${edge}`)
        .attr("x", function(d, i){
            return -i*edge + xs
        })
        .attr("y", function(d, i){
            return ys
        })
        .attr("fill", "yellow")
        .attr("stroke", borderColor)
        .attr("stroke-width", "1px")

xs = 7*edge
ys = 13*edge

svg.selectAll(".tiles")
    .data(test1)
    .enter()
        .append("rect")
        .attr("width", `${edge}`)
        .attr("height", `${edge}`)
        .attr("x", function(d, i){
            return xs
        })
        .attr("y", function(d, i){
            return -i*edge + ys
        })
        .attr("fill", "blue")
        .attr("stroke", borderColor)
        .attr("stroke-width", "1px")

splitTilesToBlocks = (arr) => {
    let fourth = arr.length/4
    let splitArr = []
    for(let i = 0; i < 4; i++){
        splitArr.push(arr.slice(i*fourth, (i+1)*fourth))
    }
    return splitArr
}

let split = splitTilesToBlocks(whiteTiles)

split[0]