let display = document.getElementById("display");
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", (e) => {
    /* console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText); */
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Syntax Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
}
