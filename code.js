let btnStrt = document.querySelector("#strt")
let btnWord = document.querySelector("#word")
let btnAz = document.querySelector("#az")
let inpt = document.querySelector("#input")
let grid = document.querySelector(".grid")

data.forEach(e => {
    let div = document.createElement("div")
    div.setAttribute("class", "box")
    div.textContent = e
    grid.append(div)
});

inpt.addEventListener("input", e => {
    grid.innerHTML = ""
    let value = inpt.value
    let a = data.filter(e => e.match(value))

    arr = []
    a.forEach(e => {
        let div = document.createElement("div")
        div.setAttribute("class", "box")
        div.textContent = e
        grid.append(div)

        arr.push(e)
    })

})

let arr = data;

let start = () => {
    inpt.addEventListener("input", e => {
        grid.innerHTML = ""
        let value = inpt.value
        let lngth = value.length
        let a = data.filter(e => e.slice(0, lngth).toLowerCase() == value.toLowerCase())

        arr = []
        a.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class", "box")
            div.textContent = e
            grid.append(div)

            arr.push(e)
        })
        console.log(arr)
    })
}

btnStrt.addEventListener("click", start)
btnWord.addEventListener("click", e => {
    inpt.addEventListener("input", e => {
        grid.innerHTML = ""
        let value = inpt.value
        let a = data.filter(e => e.match(value))

        arr = []
        a.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class", "box")
            div.textContent = e
            grid.append(div)

            arr.push(e)
        })

    })

})

console.log(arr)
btnAz.addEventListener("click", e => {
    if (btnAz.value == 0) {
        grid.innerHTML = ""
        btnAz.setAttribute("value", 1)
        btnAz.textContent = "↓ A-Z"
        let sort = arr.sort()
        sort.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class", "box")
            div.textContent = e
            grid.append(div)
        });
    } else {
        grid.innerHTML = ""
        btnAz.setAttribute("value", 0)
        btnAz.textContent = "↑ A-Z"
        let sort = arr.sort()
        let reverse = sort.reverse()
        reverse.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class", "box")
            div.textContent = e
            grid.append(div)
        });
    }
})