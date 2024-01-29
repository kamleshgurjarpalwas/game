const myDoc = document.documentElement;

const toggleBtn = document.querySelector(".toggle_btn");

toggleBtn.addEventListener("click", () => {

if (toggleBtn.textContent === "Enable Fullscreen") {

myDoc.requestFullscreen();

toggleBtn.textContent = "Disable Fullscreen";

} else {

document.exitFullscreen();

toggleBtn.textContent = "Enable Fullscreen";

}

});