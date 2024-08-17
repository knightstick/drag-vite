const greeting: string = "hello, world!";

function render() {
  const container = document.getElementById("container");
  if (!container) {
    return;
  }

  container.innerHTML = greeting;
}

render();
