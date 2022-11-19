const inputColor = document.getElementById("color")
const colorScheme = document.getElementById("scheme")
const fetchBtn = document.getElementById("fetch")
const colorCollection = document.querySelector("main").children

function fetchColors(colorInput,colorScheme) {
    const url = `https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${colorScheme}`
    console.log(colorInput)
    console.log(colorScheme)
    console.log(url)
    fetch(url)
        .then(res=>res.json())
        .then(data => console.log(data))
}


fetchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetchColors(inputColor.value,colorScheme.value)})