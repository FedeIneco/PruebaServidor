async function getData() {
  try {
    const response = await fetch("http://localhost:8080/", { mode: "no-cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

const boton = document.getElementById("boton");
boton.addEventListener("click", getData);
