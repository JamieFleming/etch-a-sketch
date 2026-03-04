const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseenter", () => square.style.backgroundColor = "gray");
}

const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", () => {
    let size = document.createElement
    alert("How Big? Max = 100");
})