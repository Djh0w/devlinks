function toggleMode() {
const html = document.documentElement

html.classList.toggle('light')

/*if(html.classList.contains('light')){
    html.classList.remove('light')
} else {
    html.classList.add('light')
}*/

//para trocar imagens
const img = document.querySelector("#profile img")

if(html.classList.contains("light")) {
    //setAttribute contem 2 argumentos, qual seletor e o que alterar
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    img.setAttribute("src", "./assets/avatar.png")
}


}