const themeButton = document.getElementById("theme-toggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("data-theme") ?? "dark";
html.setAttribute("data-theme", savedTheme);

themeButton.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light")
        themeButton.textContent = "🌙";
    } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark")
        themeButton.textContent = "☀️";
    }
});
function updateButton() {
    if (html.getAttribute("data-theme") === "dark") {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
}


updateButton();