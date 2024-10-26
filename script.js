let gridContainer = document.querySelector("#gridContainer");
const buttonResetGridSize = document.querySelector("#resetGridSize");
const bodyDocument = document.querySelector("body");

const createGrid = (size) => {
  const proportionalSize = 100 / size; //100 is the whole container
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "gridElement";

    newDiv.style.width = `${proportionalSize}%`; //it takes a % of the container
    newDiv.style.height = `${proportionalSize}%`;

    gridContainer.appendChild(newDiv);
  }
};

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const addGridEventListener = (gridContainer) => {
  gridContainer.addEventListener("mouseover", (event) => {
    const target = event.target;
    console.log(target);
    if (target.id === "gridElement") {
      target.style.backgroundColor = `#${randomColor()}`;
    }
  });
};

buttonResetGridSize.addEventListener("click", (event) => {
  let newSize = window.prompt("New grid size:");
  gridContainer.remove();

  gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";

  bodyDocument.appendChild(gridContainer);

  createGrid(newSize);
  addGridEventListener(gridContainer);
});

createGrid(16);
addGridEventListener(gridContainer);
