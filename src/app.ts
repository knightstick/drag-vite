import Sortable from "sortablejs";

const greeting: string = "hello, world!";

function renderColumn(
  numberOfBoxes: number,
  index: number,
  container: HTMLElement
) {
  const column = document.createElement("div");
  column.className = "flex-1 flex-col h-full p-4";

  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    div.className =
      "bg-blue-200 border border-blue-500 flex-1 p-4 mb-2 cursor move text-center";
    div.textContent = `Column ${index} - Div ${i + 1}`;

    column.appendChild(div);
  }

  var sortable = Sortable.create(column, {
    group: "shared",
    animation: 20,
  });

  container.appendChild(column);
}

function render() {
  const container = document.getElementById("container");
  if (!container) {
    return;
  }

  const columnNumbers: number[] = [5, 3, 0, 1];

  columnNumbers.forEach((numberOfBoxes, index) => {
    renderColumn(numberOfBoxes, index, container);
  });
}

render();
