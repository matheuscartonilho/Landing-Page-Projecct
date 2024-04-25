var leftarrow = window.document.getElementById("left-arrow")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var rightarrow = window.document.getElementById("right-arrow")

function rightslide() {
    bruna.style = "display:none; transition:all 1s ease-out"
    samantha.style = "display:flex"
    rightarrow.style = "display:none"
    leftarrow.style = "display:flex"
}

function leftslide() {
    bruna.style = "display:flex"
    rightarrow.style ="display:flex"
    leftarrow.style="display:none"
    samantha.style="display:none"
}




