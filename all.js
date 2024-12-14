let body = document.querySelector("body");
let btn = document.querySelector("#flexSwitchCheckChecked");
btn.addEventListener("change",()=>{
  console.log("ok");
  
})

// Check localStorage and apply saved mode
let mode = localStorage.getItem("mode");
if (mode === "black") {
body.style.backgroundColor = "black";
body.style.color = "white";
btn.checked = true;
} else if (mode === "white") {
body.style.backgroundColor = "white";
body.style.color = "black";
btn.checked = false;
} else {
localStorage.setItem("mode", "white");
body.style.backgroundColor = "white";
btn.checked = false;
}

// Toggle button listener
btn.addEventListener("change", () => {
if (btn.checked) {
    localStorage.setItem("mode", "black");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    // btn.style.backgroundColor = "white";
} else {
    localStorage.setItem("mode", "white");
    body.style.backgroundColor = "white";
    body.style.color = "black";
}
});