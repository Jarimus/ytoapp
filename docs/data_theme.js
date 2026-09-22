function configureThemeButton() {   
    const themeButton = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("data-theme") ?? "dark";
    html.setAttribute("data-theme", savedTheme);
    updateButton();

    themeButton.addEventListener("click", () => {
        const html = document.documentElement;
        if (html.getAttribute("data-theme") === "dark") {
            html.setAttribute("data-theme", "light");
            localStorage.setItem("data-theme", "light")
            updateButton();
        } else {
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("data-theme", "dark")
            updateButton();
        }
    });
}

function updateButton() {
    const themeButton = document.getElementById("theme-toggle");
    const html = document.documentElement;
    if (html.getAttribute("data-theme") === "dark") {
        themeButton.textContent = "Vaihda tilaksi ☀️";
    } else {
        themeButton.textContent = "Vaihda tilaksi 🌙";
    }
}