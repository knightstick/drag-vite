const greeting: string = "hello, world!";

function renderColumn(numberOfBoxes: number, container: HTMLElement) {
  const column = document.createElement("div");
  column.className = "flex flex-col w-full p-4";

  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    div.className =
      "bg-blue-200 border border-blue-500 flex-1 p-4 mb-2 cursor move text-center";
    div.textContent = greeting;

    column.appendChild(div);
  }

  container.appendChild(column);
}

function render() {
  const container = document.getElementById("container");
  if (!container) {
    return;
  }

  renderColumn(3, container);
}

render();
