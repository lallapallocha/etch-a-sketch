const gridContainer = document.querySelector("#gridContainer");

const createGrid = (size) => {
  for (let i = 0; i <= size; i++) {
    const newRow = document.createElement("div");
    newRow.id = "gridColumn";
    for (let j = 0; j <= size; j++) {
      const newDiv = document.createElement("div");
      newDiv.id = "gridElement";
      newDiv.textContent = `${j}`;
      newRow.appendChild(newDiv);
    }
    gridContainer.appendChild(newRow);
  }
};

createGrid(16);
