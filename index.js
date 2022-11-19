const inputColor = document.getElementById("color")
const colorScheme = document.getElementById("scheme")
const fetchBtn = document.getElementById("fetch")
const colorContainer = document.querySelector("main")

function setColors(colorInput,colorScheme) {
    const url = `https://www.thecolorapi.com/scheme?hex=${colorInput.slice(1)}&mode=${colorScheme.toLowerCase()}`
    fetch(url)
        .then(res=>res.json())
        .then(data => {
            render(data.colors)
        })
}


fetchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    setColors(inputColor.value, colorScheme.value)
})

function render(colors) {
    const html = colors.map((color,i) => {
        return (`
        <div id="color-list-item-${i} data-color=${color.hex.value}">
            <div class="color" data-color=${color.hex.value} style="background-color:${color.hex.value};"></div>
            <p class="color-code" data-color=${color.hex.value}>${color.hex.value}</p>
        </div>
        `)
    }).join("")
    colorContainer.innerHTML = html
}

colorContainer.addEventListener("click", (e) => {
    const colorClicked = e.target.dataset.color
    if (colorClicked) {
        navigator.clipboard.writeText(colorClicked)
    }
})