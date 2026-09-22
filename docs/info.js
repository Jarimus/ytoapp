function showInfoPopup() {
    const popup = document.getElementById("infoPopup");
    const closePopup = document.getElementById("closePopup");
    const dontShowAgain = document.getElementById("dontShowAgain");
    // OK button
    closePopup.addEventListener("click", () => {
        popup.close();
    });

    // "Don't show again" button
    dontShowAgain.addEventListener("click", () => {
        localStorage.setItem("hideInfoPopup", "true");
        popup.close();
    });

    // Show popup unless the user has chosen not to see it again
    if (localStorage.getItem("hideInfoPopup") !== "true") {
        popup.showModal();
    }
}